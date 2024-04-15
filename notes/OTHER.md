# Other Notes

## Merge file into another branch

To merge a single file from another branch in Git, you can use the `checkout` command. Here's how:

1. First, ensure you're on the branch you want to merge the file into. You can switch to your target branch using the `checkout` command:

```sh
git checkout {target_branch}
```

Replace `{target_branch}` with the name of your target branch.

2. Then, use the `checkout` command again to bring over the specific file from the other branch:

```sh
git checkout {source_branch} -- {file_path}
```

Replace `{source_branch}` with the name of the branch you want to merge the file from, and `{file_path}` with the path to the file you want to merge.

3. Finally, commit the changes to save the merged file in your target branch:

```sh
git commit -m "Merged file from another branch"
```

This will bring over the version of the file from the source branch into your current (target) branch.
