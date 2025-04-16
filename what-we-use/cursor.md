# A short note on Cursor <!-- omit in toc -->

## What is Cursor?

[Cursor](https://www.cursor.com "https://www.cursor.com") is a code editor built on VSCode with AI. You can let Cursor generate code for you with simple instructions.

Be careful!\
It is a VERY new tool. Today is 17th April 2025 and the version is `0.48.9`.

## What it can do

Nearly everything VSCode could offer, and a couple of code generation & execution tools

- Tab
  **Code Completion**

- Chat
  - **Code Reasoning**
  - Three modes
    - Ask Mode
    - **Agent Mode**
    - Custom Mode

- Composer
  - **Code Generation**
  - **Test Generation**
  - **Command Execution**

![Do it yourself!](cursor-do-it-yourself.png)

## What is an Agent Mode

Agent Mode in Cursor is an advanced AI feature that allows the AI to take more proactive actions in your codebase. When enabled, the AI can:

- Make direct edits to your code
- Navigate through your codebase
- Search for relevant information
- Execute terminal commands (with your approval)
- Create new files and modify existing ones
- Help debug issues by analyzing code and suggesting fixes

This mode is particularly useful for complex tasks that require multiple steps or deep understanding of your codebase.

## Refine the answer by Context

Cursor's AI is designed to provide context-aware responses by:

- Define rules & instructions in `.rules/*.mdc`

## What is MCP

[MCP](https://modelcontextprotocol.io) (Model Control Protocol) is a Open Protocol. LLM supports MCP can interact with **services** and **data sources** that support MCP directly

Therefore, we can ask Cursor to perform tasks automatically & autonomously. What we need to do is provide **GOOD context**

## Improvement

MCP does not support Authentication natively\
We need to work on it separately (e.g. playwright?)

## Danger Zone

You can try `auto-run mode` aka yolo mode

## Alternatives

- **Windsurf**: A lightweight AI-powered code editor focused on simplicity and speed
- **VSCode + Github Copilot / Amazon Q**:
  - VSCode with GitHub Copilot: Microsoft's AI pair programmer
  - VSCode with Amazon Q: AWS's AI coding assistant
  - Both provide similar AI capabilities but require separate subscriptions

## Reference

- [Cursor told me I should learn coding instead of asking it to generate it](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132)
