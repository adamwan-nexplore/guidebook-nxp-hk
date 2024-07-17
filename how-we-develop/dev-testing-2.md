# Developer Testing (2) <!-- omit in toc -->

**Table of Contents**

- [The objective of writing test cases](#the-objective-of-writing-test-cases)
- [The bottom line](#the-bottom-line)
- [Simulating behaviours \& Practical definition](#simulating-behaviours--practical-definition)
- [Test strategies](#test-strategies)
  - [Developer - Unit Test](#developer---unit-test)
  - [Developer - End-to-End Test](#developer---end-to-end-test)
  - [Developer - Component Test](#developer---component-test)
  - [Quality Assurance - Smoke Test](#quality-assurance---smoke-test)
  - [Quality Assurance - Regression Pack](#quality-assurance---regression-pack)
- [Reference](#reference)

## The objective of writing test cases

- Verify things working as `EXPECTED`

## The bottom line

- Verify things through output
- Be avoid to test any internal structures or workings
  - Test with mocking for non-configurations (No good, consider STUB)
  - Test the data by accessing into database or cache directly (No good, please review your interfaces)

## Simulating behaviours & Practical definition

- Stub
  - Returns the SAME result regardless of INPUTS
- Mock
  - Returns the result by selected INPUTS (maybe also the number of times it has called)
- Spy
  - Check the number of calls of certain function

- Quick Check
  - [Mocks Aren't Stub](https://martinfowler.com/articles/mocksArentStubs.html "https://martinfowler.com/articles/mocksArentStubs.html")
  - [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js "https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js")

## Test strategies

### Developer - Unit Test

- `When` test against the pure functions
- `Verify` the output, period
- Give you `confidence` on logics

### Developer - End-to-End Test

- `When` test against the APIs
- `Verify` the output and sometimes the cache hit
- DO NOT mock ANY implementations other than configurations. if needed, DO NO WRITE
- Give you `confidence` on part of logics, database query, cache

### Developer - Component Test

- `When` test against the functions that are NOT exposed to APIs, e.g. background jobs
- `Verify` the output and sometimes the cache hit
- Be avoid to mock the implementations
- Give you `confidence` on part of logics, database query, cache

### Quality Assurance - Smoke Test

- `When` test against the client end
- `Verify` UI display with minimized interactions
- Give you `confidence` on part of logics, part of database query, part of cache

### Quality Assurance - Regression Pack

- `When` test against the client end
- `Verify` UI display with REAL user stories
- Give you `confidence` on part of logics, part of database query, part of cache and usability
- They are disposable tests. QA Engineers will review those regularly and decide whether we need a better ones

## Reference

- [Unit Testing Principles, Practices, and Patterns](https://www.manning.com/books/unit-testing "https://www.manning.com/books/unit-testing")
- [Test your Micro-services](https://loopback.io/doc/en/lb4/Testing-your-application.html "https://loopback.io/doc/en/lb4/Testing-your-application.html")
