const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", function () {
          let fundMe;
          //   let mockV3Aggregator;
          let deployer;
          let MockV3AggregatorAddress;
          const sendValue = ethers.parseEther("1"); // Ethers V6
          beforeEach(async () => {
              // const accounts = await ethers.getSigners()
              // deployer = accounts[0]
              deployer = (await getNamedAccounts()).deployer;

              const Deployments = await deployments.fixture(["mocks"]);
              MockV3AggregatorAddress = Deployments.MockV3Aggregator.address;
              //deploy fundme with ethers

              const fundMeFactory = await ethers.getContractFactory("FundMe");
              fundMe = await fundMeFactory.deploy(MockV3AggregatorAddress);

              //   fundMe = await ethers.getContractAt("FundMe", fundMeAddress, deployer);
              //   mockV3Aggregator = await ethers.getContractAt(
              //       "MockV3Aggregator",MockV3AggregatorAddress,
              //       deployer,
              //   );
          });

          describe("constructor", function () {
              it("sets the aggregator addresses correctly", async () => {
                  const response = await fundMe.getPriceFeed();
                  console.log("************\n" + response + "\n************");
                  assert.equal(response, MockV3AggregatorAddress);
              });
          });

          describe("fund", function () {
              // https://ethereum-waffle.readthedocs.io/en/latest/matchers.html
              // could also do assert.fail
              it("Fails if you don't send enough ETH", async () => {
                  await expect(fundMe.fund()).to.be.revertedWith(
                      "You need to spend more ETH!",
                  );
              });
              // we could be even more precise here by making sure exactly $50 works
              // but this is good enough for now
              it("Updates the amount funded data structure", async () => {
                  await fundMe.fund({ value: sendValue });
                  const response =
                      await fundMe.getAddressToAmountFunded(deployer);
                  assert.equal(response.toString(), sendValue.toString());
              });
              it("Adds funder to array of funders", async () => {
                  await fundMe.fund({ value: sendValue });
                  const response = await fundMe.getFunder(0);
                  assert.equal(response, deployer);
              });
          });
          describe("withdraw", function () {
              beforeEach(async () => {
                  await fundMe.fund({ value: sendValue });
              });
              it("withdraws ETH from a single funder", async () => {
                  // Arrange
                  const startingFundMeBalance = await fundMe.provider.getBalance(
                      fundMe.address,
                  );
                  const startingDeployerBalance =
                      await fundMe.getBalance(deployer);

                  // Act
                  const transactionResponse = await fundMe.connect(deployer).withdraw();
                  const transactionReceipt = await transactionResponse.wait();
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);

                  const endingFundMeBalance = await fundMe.getBalance(
                      fundMe.address,
                  );
                  const endingDeployerBalance =
                      await fundMe.getBalance(deployer);

                  // Assert
                  // Maybe clean up to understand the testing
                  assert.equal(endingFundMeBalance, 0);
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(gasCost).toString(),
                  );
              });
              // this test is overloaded. Ideally we'd split it into multiple tests
              // but for simplicity we left it as one
              it("is allows us to withdraw with multiple funders", async () => {
                  // Arrange
                  const accounts = await ethers.getSigners();
                  for (i = 1; i < 6; i++) {
                      const fundMeConnectedContract = await fundMe.connect(
                          accounts[i],
                      );
                      await fundMeConnectedContract.fund({ value: sendValue });
                  }
                  const startingFundMeBalance = await fundMe.getBalance(
                      fundMe.address,
                  );
                  const startingDeployerBalance =
                      await fundMe.getBalance(deployer);

                  // Act
                  const transactionResponse = await fundMe.cheaperWithdraw();
                  // Let's comapre gas costs :)
                  // const transactionResponse = await fundMe.withdraw()
                  const transactionReceipt = await transactionResponse.wait();
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const withdrawGasCost = gasUsed.mul(effectiveGasPrice);
                  console.log(`GasCost: ${withdrawGasCost}`);
                  console.log(`GasUsed: ${gasUsed}`);
                  console.log(`GasPrice: ${effectiveGasPrice}`);
                  const endingFundMeBalance = await fundMe.getBalance(
                      fundMe.address,
                  );
                  const endingDeployerBalance =
                      await fundMe.getBalance(deployer);
                  // Assert
                  assert.equal(
                      startingFundMeBalance
                          .add(startingDeployerBalance)
                          .toString(),
                      endingDeployerBalance.add(withdrawGasCost).toString(),
                  );
                  // Make a getter for storage variables
                  await expect(fundMe.getFunder(0)).to.be.reverted;

                  for (i = 1; i < 6; i++) {
                      assert.equal(
                          await fundMe.getAddressToAmountFunded(
                              accounts[i].address,
                          ),
                          0,
                      );
                  }
              });
              it("Only allows the owner to withdraw", async function () {
                  const accounts = await ethers.getSigners();
                //   const fundMeConnectedContract = await fundMe.connect(
                //       accounts[0],
                //   );
                  await expect(
                      fundMe.connect(deployer).withdraw(),
                  ).to.be.revertedWith("FundMe__NotOwner");
              });
          });
      });
