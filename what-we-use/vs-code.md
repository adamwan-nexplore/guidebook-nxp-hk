# Visual Studio Code <!-- omit in toc -->

**Table of Contents**

- [Tutorial](#tutorial)
- [Extensions](#extensions)
  - [Code Spell Checker](#code-spell-checker)
  - [Batch Rename](#batch-rename)
  - [Error Lens](#error-lens)
  - [Pretty TypeScript Errors](#pretty-typescript-errors)
  - [SonarLint](#sonarlint)
  - [jwt-decode](#jwt-decode)
  - [Duplicate Action](#duplicate-action)
  - [(Typescript) Typescript Import Sort](#typescript-typescript-import-sort)
  - [GitLens](#gitlens)
  - [Unix Time Converter](#unix-time-converter)
  - [TODO Highlight v2](#todo-highlight-v2)
  - [Live Share](#live-share)
  - [Polacode](#polacode)
  - [Auto Rename Tag](#auto-rename-tag)
  - [Markdown All in One](#markdown-all-in-one)
- [Shortcuts and Features](#shortcuts-and-features)
- [GitHub Copilot](#github-copilot)
  - [The Inspiration](#the-inspiration)
  - [Autocompletion](#autocompletion)
  - [Chat](#chat)
    - [Inline Chat](#inline-chat)
    - [Sidebar Chat](#sidebar-chat)
    - [Voice Chat](#voice-chat)
  - [Three Ss](#three-ss)
- [Reference](#reference)

## Tutorial

> Open the Welcome page from the Help > Editor Playground menu or use the Help: Interactive Editor Playground command from the Command Palette (⇧⌘P).

## Extensions

- Most of the images are from the original plugin page

### [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker "https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker")

![Code Spell Checker](https://raw.githubusercontent.com/streetsidesoftware/vscode-spell-checker/main/images/suggestions.gif)

- find spelling mistakes

---

### [Batch Rename](https://marketplace.visualstudio.com/items?itemName=JannisX11.batch-rename-extension "https://marketplace.visualstudio.com/items?itemName=JannisX11.batch-rename-extension")

![Batch Rename](https://raw.githubusercontent.com/JannisX11/batch-rename/main/media/demo.gif)

- Easy batch rename files

---

### [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens")

![Error Lens](https://raw.githubusercontent.com/usernamehw/vscode-error-lens/master/img/demo.png)

- Display error at the end of the line

---

### [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors "https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors")

![Pretty TypeScript Errors](https://raw.githubusercontent.com/yoavbls/pretty-ts-errors/b358fed5b4437be9fe109a836b77c6ca88a273a6/assets/this.png)

- Wrap the error in a more readable way

---

### [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode "https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode")

![SonarLint](https://raw.githubusercontent.com/SonarSource/sonarlint-vscode/b446efa174ad1bf03a3c98a2fe68c7fe6c74b45c/images/sonarlint-vscode.gif)

- Provide additional recommendations other than eslint
- Further set up please refer to [here](./sonarqube.md "./sonarqube.md")

---

### [jwt-decode](https://marketplace.visualstudio.com/items?itemName=jflbr.jwt-decoder "https://marketplace.visualstudio.com/items?itemName=jflbr.jwt-decoder")

![jwt-decode](https://raw.githubusercontent.com/jflbr/jwt-decoder/master/images/demo-from-untitled-document.gif)

- Decode JWT Token in VSCode

---

### [Duplicate Action](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate "https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate")

![Duplicate Action](./duplicate-action.png "./duplicate-action.png")

- Click `Duplicate File or Directory` to duplicate the whole target group

---

### (Typescript) [Typescript Import Sort](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter "https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter")

- Sort import libraries alphabetically
- Recommend to enable `Remove Unused Default Imports` either

---

### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens")

![GitLens](https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/current-line-blame.png)

- Show who has edited the code before

---

### [Unix Time Converter](https://marketplace.visualstudio.com/items?itemName=espresso3389.unixtime-converter "https://marketplace.visualstudio.com/items?itemName=espresso3389.unixtime-converter")

![Unix Time Converter](https://raw.githubusercontent.com/espresso3389/unixtime-converter/master/images/intro.gif)

- Convert unix timestamp to readable time

---

### [TODO Highlight v2](https://marketplace.visualstudio.com/items?itemName=jgclark.vscode-todo-highlight)

![TODO Highlight v2](https://raw.githubusercontent.com/wayou/vscode-todo-highlight/master/assets/material-night-eighties.png)

- Highlight common TODO phrases

---

### [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare "https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare")

![Live Share](https://user-images.githubusercontent.com/116461/47793782-4d253500-dcdc-11e8-9c76-3d9d5b474d9d.png)

- Live sharing and collaboration tool on VScode

### [Polacode](https://www.syncfusion.com/blogs/post/top-vs-code-extensions "https://www.syncfusion.com/blogs/post/top-vs-code-extensions")

- Extract code segments as beautiful images

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag")

![Auto Rename Tag](https://raw.githubusercontent.com/formulahendry/vscode-auto-rename-tag/f3039ed7263c5ab94c6e2fa9995d3ad265ebc822/images/usage.gif)

- Rename paired tags by changing either one

### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one "https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one")

- Extra support on markdown

## Shortcuts and Features

- https://code.visualstudio.com/docs/editor/refactoring

- Extract Variables & Functions
- Rename Symbols

## GitHub Copilot

### The Inspiration

- It is a tool to help engineers to focus on `ideas` and `testing`
- Less focus on syntax
- Copilot does not know something it does not know (Hallucination)

![Hallucination](./hallucination.png "./hallucination.png")

### Autocompletion

1. ghost text
   - type the function name
   - type the comment
     - purpose
     - input
     - output

| Usage | Windows | Mac |
| ----------- | ----------- | ----------- |
| Accept suggestion      | `tab`       | `tab` |
| Accept partially   | `ctrl` + `>` | `cmd` + `>` |
| Alternate suggestions | `alt` + `[` or `]` | `option` + `[` or `]` |
| All suggestions | `ctrl` + `enter` | `ctrl` + `enter` |

### Chat

- use `@terminal`, `@vscode` and `@workspace`
- point to files by `#file:someFileName`, `#editor` and `#selection`

#### Inline Chat

- `ctrl` / `cmd` + `I`

```typescript
// q: what is software engineering?
```

#### Sidebar Chat

<img width="393" alt="sidebar chat" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/dd9325eb-6988-4a78-94cf-140c36df84f2">

- Code copilot in the terminal

```bash
/fix
/tests
/explain
/git
```

#### Voice Chat

<img width="870" alt="voice chat" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/d652878d-ea82-4e35-9042-bd4065cb78a4">

- `ctrl` / `cmd` + `I` AND `ctrl` / `cmd` + `I`

### Three Ss

- Simple
  - keep the intention simple
- Specific
  - keep the expected code generated to produce a few lines
- Short
  - only one to two sentences each time and words in each sentence should be minimal

* copilot will give more score to files you open
* highlight the code

## Reference

- [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview "https://code.visualstudio.com/docs/copilot/overview")
- [Getting started with GitHub Copilot](https://github.com/features/copilot/getting-started "https://github.com/features/copilot/getting-started")
- [Learn AI-Assisted Python Programming](https://www.manning.com/books/learn-ai-assisted-python-programming "https://www.manning.com/books/learn-ai-assisted-python-programming")

