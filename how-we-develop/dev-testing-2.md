# Developer Testing (2)

## 1. The objective of writing test cases
- Verify things are working as `EXPECTED`

## 2. The bottom line
- Verify things through output
- Avoid to test any internal structures or workings
  - Test with stubbing for non-configurations
  - Test the data by accessing into database or cache directly

## 3. Simulating behaviours

## Practical definition
- Stub
  - Returns the SAME result regardless of INPUTS
- Mock
  - Returns the result by selected INPUTS (maybe also the number of times it has called)
- Spy
  - Check the number of calls of certain function
 
- Quick Check 
  - [Mocks Aren't Stub](https://martinfowler.com/articles/mocksArentStubs.html)
  - [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)

## 4. Test strategies 

### 4.1 Unit Test
- `When` test against the pure functions
- `Verify` the output, period
- Give you `confidence` on logics

### 4.2 End-to-End Test (Integration Test)
- `When` test against the APIs
- `Verify` the output and sometimes the cache hit
- Give you `confidence` on part of logics, database query, cache

### 4.3 Component Test (Integration Test)
- `When` test against the functions that are NOT exposed to APIs, e.g. background jobs
- `Verify` the output and sometimes the cache hit
- Give you `confidence` on part of logics, database query, cache

### 4.4 Acceptance Test (Integration Test)
- `When` test against the features
- `Verify` API outputs and the visual change of FE Terminals
- Give you `confidence` on part of logics, part of database query, part of cache and usability

## Reference
- [Unit Testing Principles, Practices, and Patterns](https://www.manning.com/books/unit-testing)
