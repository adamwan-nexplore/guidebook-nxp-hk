# Github

## General Recommendation

1. Use your own avatar. The orignal one is too hard to know who you are.
2. Make sure your username / name can show who you are.

## Pull Request & Branching

1. `rebase` rather than `merge`
    ```
    $ git rebase <target-branch>
    ```

2. Less than 5 commits per Pull Request.
    Having *Atomic Commit* per Pull Request is great but not a must.

    a. Keep amending your first commit

        $ git commit --amend
        $ git push origin --force <your-branch>

    b. (GitHub PR) Squash your Pull Request when merged
 
    c. (local) Squash against your target branch

        $ git reset $(git merge-base <target-branch> $(git rev-parse --abbrev-ref HEAD))
        $ git commit -m 'chore: I go to school by bus'

3. Consider Auto-Merge

4. Branch out from default branch, merge back to default branch

---
## Reference

- [Git - Book](https://git-scm.com/book)
- [Git: How to Squash all commit on branch](https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch)
- [Atomic Git Commit](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits)
