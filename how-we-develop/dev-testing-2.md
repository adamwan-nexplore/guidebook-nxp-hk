# Developer Testing (2) <!-- omit in toc -->

**Table of Contents**

- [1. The objective of writing test cases](#1-the-objective-of-writing-test-cases)
- [2. The bottom line](#2-the-bottom-line)
- [3. Simulating behaviours](#3-simulating-behaviours)
- [4. Practical definition](#4-practical-definition)
- [5. Test strategies](#5-test-strategies)
  - [5.1. Unit Test](#51-unit-test)
  - [5.2. End-to-End Test (Integration Test)](#52-end-to-end-test-integration-test)
  - [5.3. Component Test (Integration Test)](#53-component-test-integration-test)
  - [5.4. Acceptance Test (Integration Test)](#54-acceptance-test-integration-test)
- [6. Reference](#6-reference)

## 1. The objective of writing test cases

- Verify things are working as `EXPECTED`

## 2. The bottom line

- Verify things through output
- Be avoid to test any internal structures or workings
  - Test with mocking for non-configurations (No good, consider MOCK)
  - Test the data by accessing into database or cache directly (No good, please review your interfaces)

## 3. Simulating behaviours

## 4. Practical definition

- Stub
  - Returns the SAME result regardless of INPUTS
- Mock
  - Returns the result by selected INPUTS (maybe also the number of times it has called)
- Spy

  - Check the number of calls of certain function

- Quick Check
  - [Mocks Aren't Stub](https://martinfowler.com/articles/mocksArentStubs.html "https://martinfowler.com/articles/mocksArentStubs.html")
  - [Best Practices for Spies, Stubs and Mocks in Sinon.js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js "https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js")

## 5. Test strategies

### 5.1. Unit Test

- `When` test against the pure functions
- `Verify` the output, period
- Give you `confidence` on logics

### 5.2. End-to-End Test (Integration Test)

- `When` test against the APIs
- `Verify` the output and sometimes the cache hit
- DO NOT mock ANY implementations other than configurations. if needed, DO NO WRITE
- Give you `confidence` on part of logics, database query, cache

### 5.3. Component Test (Integration Test)

- `When` test against the functions that are NOT exposed to APIs, e.g. background jobs
- `Verify` the output and sometimes the cache hit
- Avoid to mock the implementations
- Give you `confidence` on part of logics, database query, cache

### 5.4. Acceptance Test (Integration Test)

- `When` test against the features
- `Verify` API outputs and the visual change of FE Terminals
- Give you `confidence` on part of logics, part of database query, part of cache and usability

## 6. Reference

- [Unit Testing Principles, Practices, and Patterns](https://www.manning.com/books/unit-testing "https://www.manning.com/books/unit-testing")
- [Test your Micro-services](https://loopback.io/doc/en/lb4/Testing-your-application.html "https://loopback.io/doc/en/lb4/Testing-your-application.html")
