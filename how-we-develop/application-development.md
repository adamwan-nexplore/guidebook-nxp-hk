# Application Development <!-- omit in toc -->

Table of Contents

- [Data Security](#data-security)
- [Interfaces](#interfaces)
  - [Request](#request)
  - [Response](#response)
  - [Style](#style)
- [Database](#database)
- [Quality Assurance](#quality-assurance)
- [Pull Request \& Code Review](#pull-request--code-review)
- [Refactoring](#refactoring)
- [Reference](#reference)

## Data Security

- Always validate inputs (sanitization).
  - wrong interfaces can crash the app and introduce un-expected bugs
- All ids referencing need to check carefully
  - Is ID the expected type? (integer vs uuid)
  - Does ID actually exist?
  - Does ID belong to the same module?

## Interfaces

Interfaces of API are very IMPORTANT.

- Clean
- Un-surprised
  - Uniform interfaces
- Focused
  - Group resources
  - Be avoid to send random fields without scoping

### Request

1. Set default values if necessary

2. Standardize the way to use `header`, `param`, `query`, and `body`

  for example:

  ```bash
    POST https://qualitycontrol.nexplore.com/projects/{projectId}?notifyUsers=true

    Authorization: Bearer {TOKEN}

    {
        "name": "project name",
        "code": "code",
        "participants": [
          "adam",
          "benny",
          "carlos",
          ...
        ]
        ...
    }

  ```

- header = general settings on that domain, `Authorization`
- param = identifier of resource, `projectId`
- query = non-core features - `notifyUsers`
- body = persistent data

### Response

1. Categorize User ERROR correctly (4xx status code). It reduces user frictions

- data input
- unauthorized action
- unauthenticated

1. Categorize System ERROR correctly (5xx status code). It could be helpful on setting alerts

- database queries
- connection errors
- logic

### Style

REST is NOT necessary

- However, we should apply some of constraints to make our API style consistent
- If you do not know what is REST - check [here](../what-we-share/rest-api.md)

- If using REST, PUT is often simpler to implement than PATCH

## Database

- Review your database table structure, indexing, and queries carefully - check [here](database-design.md)

## Quality Assurance

- **Unit tests** are helpful - check [here](dev-testing.md)
- **Integration tests** can expose a lot of issues
- **Smoke tests** can ensure the system is working in a timely manner

## Pull Request & Code Review

- Discover something you do not know
- Audit the change of code

## Refactoring

Split logics into smaller pieces

- Be more manageable and easier to write

## Reference

- [Refactoring Guru](https://refactoring.guru "https://refactoring.guru")
- [Refactoring](https://martinfowler.com/books/refactoring.html "https://martinfowler.com/books/refactoring.html")
- [Tidy First?](https://www.oreilly.com/library/view/tidy-first/9781098151232 "https://www.oreilly.com/library/view/tidy-first/9781098151232")
