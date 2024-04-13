# Scripting

## Nature of scripts
- A procedural way to automate stuff
- Usually with a bit of `hacks`. Can be very hard to understand

## Bear in mind
- A script is acutally a program
- It should be good enough so that you can maintain it

## Some common scripts

### Bash

1. Prefer `FLAG` rather than `OPTION`. It is about readability
```
git commit --amend -m "I go to school by bus"
```
- `--amend` is a FLAG
- `-m` is an option, which uses only IF typing a command, NOT scriptings
```
git commit --amend --message="I go to school by bus"
```

2. Prefer write `${}` if it is IN a VARIABLE
```
FISH=abc
echo "${FISH}123"
```

3. Prefer `VARIABLE` rather than `ENVIRONMENT VARIABLE`
```
FOO=foo ## variable
EXPORT BAR=bar ## environment variable
```

4. A separate script should ALWAYS have [SHEBANG](https://zh.wikipedia.org/wiki/Shebang "https://zh.wikipedia.org/wiki/Shebang") at the first line
```
#!/bin/bash
```

5. Always add [`set -ex`](https://www.peterbe.com/plog/set-ex "https://www.peterbe.com/plog/set-ex")

6. double quotes VS single quotes
- double quotes - expand variables
- single quotes - does not expand variables



### Python
- Be avoid to use in Helmcharts as inline script
    - both use indentations
    - can be error prone on Helmcharts (which is the infamous part)
    - no syntax highlight and static analyzing on inline script



## Reference
- [When Procedural Is Better Than Declarative Programing](https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227 "https://medium.com/hackernoon/when-procedural-is-better-than-declarative-51b24aaaf227")