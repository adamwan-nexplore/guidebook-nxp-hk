# Scripting <!-- omit in toc -->

**Table of Contents**

- [1. The Nature](#1-the-nature)
- [2. Bear in mind](#2-bear-in-mind)
- [3. Tips](#3-tips)
  - [3.1. Bash](#31-bash)
  - [3.2. Python](#32-python)
- [4. Reference](#4-reference)

## 1. The Nature

- A procedural way to automate stuff
- Usually with a bit of `hacks`. Can be very hard to understand

## 2. Bear in mind

- A script is actually a program
- It should be good enough so that you can maintain it, and read it later

## 3. Tips

### 3.1. Bash

1. Prefer `FLAG` rather than `OPTION`. It is about readability

   ```bash
   git commit --amend -m "I go to school by bus"
   git commit --amend --message="I go to school by bus" ## better

   ## Where,
   ## `--amend` is a FLAG
   ## `-m` is an option, which uses only IF typing a command, NOT scripts
   ```

2. Prefer `${}`

   ```bash
   FISH=abc
   echo "${FISH}123"
   ```

3. Prefer `VARIABLE` rather than `ENVIRONMENT VARIABLE`. Avoid the global scope

   ```bash
   FOO=foo ## variable
   EXPORT BAR=bar ## environment variable
   ```

4. A separate script should ALWAYS have [SHEBANG](<https://en.wikipedia.org/wiki/Shebang_(Unix)> "https://en.wikipedia.org/wiki/Shebang_(Unix)") at the first line

   ```bash
   #!/bin/bash
   ```

5. Always add [`set -ex`](https://www.peterbe.com/plog/set-ex "https://www.peterbe.com/plog/set-ex")

6. double quotes VS single quotes
   - double quotes - expand variables
   - single quotes - does not expand variables

### 3.2. Python

    - Be avoid to use Python in HelmCharts as inline script
        - both use indentations
        - can be error prone
        - no syntax highlight and static analyzing on editors

## 4. Reference

- [When Procedural Is Better Than Declarative Programming](https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227 "https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227")
