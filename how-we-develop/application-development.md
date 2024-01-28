# Application Development

## 1. Interface
- interface IS very IMPORTANT. Keep it clean, un-surprised, focused
    - REST is NOT necessary. However, we should apply some of constraints to make our APIs consistent
    - If you do not know what is REST, check [here](../what-we-share/rest-api.md)
- input validation IS very very IMPORTANT (sanitization). Wrong interfaces can crash the app and introduce un-expected bugs
    - set default values if necessary
    - In REST, PUT is often simpler to implement than PATCH
    - All ids referencing need to check carefully
        - Is ID the expected type? (integer vs uuid)
        - Does ID actually exist?
        - Does ID belong to the same module?
- categorize User ERROR correctly (4xx status code)
    - data input
    - unauthorized action
    - unauthenticated
- categorize System ERROR correctly (5xx status code), it could be helpful on DataDog
    - database queries
    - connection errors
    - logic

## 2. Database
- review your database table structure, indexing, and queries carefully, check [here](database-design.md)

## 3. Quality Assurance
- unit tests are helpful, check [here](dev-testing.md)
- integration tests can expose a lot of issues

## 4. Pull Request & Code Review
- discover something you do not know
- audit the change of code

## 5. Refactoring
- split logics into smaller pieces
- be more manageable and easier to write

## 6. Reference
- [Refactoring Guru](https://refactoring.guru "https://refactoring.guru")
- [Refactoring](https://martinfowler.com/books/refactoring.html "https://martinfowler.com/books/refactoring.html")
- [Tidy First?](https://www.oreilly.com/library/view/tidy-first/9781098151232 "https://www.oreilly.com/library/view/tidy-first/9781098151232")  
