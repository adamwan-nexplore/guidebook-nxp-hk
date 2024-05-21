# Naming <!-- omit in toc -->

**Table of Contents**

- [1. Introduction](#1-introduction)
- [2. Variables](#2-variables)
- [3. Functions](#3-functions)
  - [3.1. Interact with databases / cache](#31-interact-with-databases--cache)
  - [3.2. Transform data from record](#32-transform-data-from-record)
  - [3.3. Fetch Records from list](#33-fetch-records-from-list)
  - [3.4. Async Job Creation](#34-async-job-creation)
  - [3.5. Validation](#35-validation)
- [4. Reference](#4-reference)

## 1. Introduction

- It is a very hard topic in COMPUTER SCIENCE. Here is the recommendation based on my experience. Heavily inspired by the conventions from Ruby on Rails.
  > There are only two hard things in Computer Science: cache invalidation and naming things.  
  > -- Phil Karlton
- Always name the field which is within `local scope`. Do not refer to the original arguments called.
- Avoid to use `type` because in `TypeScript` it is too common
- Assume the variable is `data`

## 2. Variables

- before validation `rawData`
- after validation `data`
- after updated `newData`
- comparison from logs `newData` & `originalData`

## 3. Functions

### 3.1. Interact with databases / cache

- `findSomething`
- `deleteSomething`
- `updateSomething`
- `createSomething`

```
Very confusing part

`get` vs `fetch` vs `find`
```

### 3.2. Transform data from record

- `transformSomething`

### 3.3. Fetch Records from list

- `fetchSomething`

### 3.4. Async Job Creation

- `doSomethingLater`

### 3.5. Validation

- `throwInvalidData()` if throws `error`
- `validateData` if returns `true / false`

## 4. Reference

- [TwoHardThings](https://martinfowler.com/bliki/TwoHardThings.html "https://martinfowler.com/bliki/TwoHardThings.html")
- [Linguistic Anti-patterns](https://www.linguistic-antipatterns.com/?tab=%22Confusable-methods%22 "https://www.linguistic-antipatterns.com/?tab=%22Confusable-methods%22")
