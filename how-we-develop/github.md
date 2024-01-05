# Github

## General Recommendation

1. Use your own avatar. The orignal one is too hard to know who you are.
2. Make sure your username / name can show who you are.

## Pull Request & Branching

1. `rebase` rather than `merge`
    ```bash
    git rebase <target-branch>
    ```

2. Less than 5 commits per Pull Request.
    Having *Atomic Commit* per Pull Request is great but not a must.

    a. Keep amending your first commit

        git commit --amend && git push origin --force <your-branch>

    b. (GitHub PR) Squash your Pull Request when merged

    c. (local) Squash against your target branch

        git reset $(git merge-base <target-branch> $(git rev-parse --abbrev-ref HEAD)) # way 1
        git commit -m 'chore: I go to school by bus' # way 2

3. Consider Auto-Merge
4. Branch out from default branch, merge back to default branch
5. Follow [Conventional Commits](https://www.conventionalcommits.org/)
    - FORMAT: `type: [TICKET-NUMBER] commmit messages`
    - REGEX: `^(promote|back|build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-\.]+\))?(!)?: \[CPCS\-[0-9]+\] ([\w ])+([\s\S]*)`
    - e.g. `feat: [CPCS-1234] add user endpoint`
6. Set up [auto-link](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-autolinks-to-reference-external-resources) for tracking back JIRA Tasks
7. Continuous Integration
    - Pull Request
        - App Build Check
        - Style Check
            - Code Style
            - Commit Message Format
        - Migration Check
        - Code Check
            - Unit Test
            - Integration Test
    - Daily
        - Vulnerability Test
## Reference

- [Git - Book](https://git-scm.com/book "https://git-scm.com/book")
- [Git: How to Squash all commit on branch](https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch "https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch")
- [Atomic Git Commit](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits "https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits")
