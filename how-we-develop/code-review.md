# Code Review <!-- omit in toc -->

## Why We Do Code Reviews

1. Identify and fix potential bugs or issues early
2. Promote better code quality and maintainability
3. Share knowledge across the team
4. Ensure consistency in coding standards

## First Principle

Both **author** and **reviewers** need to work together

## General Principles

### Author

- include the ticket number in the commit message
  - GitHub will link to the respective JIRA tickets
- do a self review
- comment to your pull request if necessary

- work with complex database queries
  - request raw queries
  - query execution plans

- work with complex logics
  - provide graphical illustrations
  - be avoid to have lengthy description

### Reviewer

- approve working code ONLY
- facilitate more good code
  - Do you understand the change?
  - Do you THINK you can code a similar change?
  - Do you THINK you can add features on top of this change applied?

## Technical Guides

This guide is specific to our team's practices and preferences.

Check [here](../how-we-develop/application-development.md) for coding standards

Check [here](../how-we-develop/database-design.md) for database design guidelines

## PR Checklist

Using a consistent template for pull requests improves review efficiency

On each repository: add your template to `.github/PULL_REQUEST_TEMPLATE.md`

See our template [PR Checklist](../how-we-develop/pr-checklist.md)

## Reference

- [SmartBear - Best Practices for Code Review](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review "https://smartbear.com/learn/code-review/best-practices-for-peer-code-review")
- [Google - Code Review Developer Guide](https://google.github.io/eng-practices/review "https://google.github.io/eng-practices/review")
- [GitLab - Code Review Guidelines](https://docs.gitlab.com/ee/development/code_review.html "https://docs.gitlab.com/ee/development/code_review.html")

## Books Recommended

- ["Looks Good To Me"](https://www.manning.com/books/looks-good-to-me) by Michael Lynch
- [99 Bottles of OOP](https://sandimetz.com/99bottles "https://sandimetz.com/99bottles") by Sandi Metz and Katrina Owen
