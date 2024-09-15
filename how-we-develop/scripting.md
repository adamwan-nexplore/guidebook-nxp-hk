# Scripting <!-- omit in toc -->

Table of Contents

- [The Nature](#the-nature)
- [Bear in mind](#bear-in-mind)
- [Tips](#tips)
  - [Bash](#bash)
    - [Prefer `FLAG` rather than `OPTION`. It is about readability](#prefer-flag-rather-than-option-it-is-about-readability)
    - [Prefer `${}`](#prefer-)
    - [Prefer `VARIABLE` rather than `ENVIRONMENT VARIABLE`. Avoid the global scope](#prefer-variable-rather-than-environment-variable-avoid-the-global-scope)
    - [A separate script should ALWAYS have SHEBANG at the first line](#a-separate-script-should-always-have-shebang-at-the-first-line)
    - [Always add `set -ex`](#always-add-set--ex)
    - [double quotes VS single quotes](#double-quotes-vs-single-quotes)
  - [Python](#python)
- [Reference](#reference)

## The Nature

- A procedural way to automate stuff
- Usually with a bit of `hacks`. Can be very hard to understand

## Bear in mind

- A script is actually a program
- It should be good enough so that you can maintain it, and read it later

## Tips

### Bash

#### Prefer `FLAG` rather than `OPTION`. It is about readability

```bash
git commit --amend -m "I go to school by bus"
git commit --amend --message="I go to school by bus" # better

# Where,
# `--amend` is a FLAG
# `-m` is an option, which uses only IF typing a command, NOT scripts
```

#### Prefer `${}`

```bash
FISH=abc
echo "${FISH}123"
```

#### Prefer `VARIABLE` rather than `ENVIRONMENT VARIABLE`. Avoid the global scope

```bash
FOO=foo # variable
EXPORT BAR=bar # environment variable
```

#### A separate script should ALWAYS have [SHEBANG](<https://en.wikipedia.org/wiki/Shebang_(Unix)> "https://en.wikipedia.org/wiki/Shebang_(Unix)") at the first line

```bash
#!/bin/bash
```

#### Always add [`set -ex`](https://www.peterbe.com/plog/set-ex "https://www.peterbe.com/plog/set-ex")

#### double quotes VS single quotes

- double quotes - expand variables
- single quotes - does not expand variables

### Python

- Be avoid to use Python in HelmCharts as inline script
  - both use indentations
  - can be error prone
  - no syntax highlight and static analyzing on editors

## Reference

- [When Procedural Is Better Than Declarative Programming](https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227 "https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227")
