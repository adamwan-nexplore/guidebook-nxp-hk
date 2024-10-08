# Naming <!-- omit in toc -->

Table of Contents

- [Introduction](#introduction)
- [Variables](#variables)
- [Functions](#functions)
  - [Interact with databases / cache](#interact-with-databases--cache)
  - [Transform data from record](#transform-data-from-record)
  - [Fetch Records from list](#fetch-records-from-list)
  - [Async Job Creation](#async-job-creation)
  - [Validation](#validation)
- [Reference](#reference)

## Introduction

- It is a very hard topic in COMPUTER SCIENCE. Here is the recommendation based on my experience. Heavily inspired by the conventions from Ruby on Rails.
  > There are only two hard things in Computer Science: cache invalidation and naming things -- Phil Karlton
- Always name the field which is within `local scope`. Do not refer to the original arguments called.
- Be avoid to use `type` because in `TypeScript` it is too common
- Assume the variable is `data`

## Variables

- before validation `rawData`
- after validation `data`
- after updated `newData`
- comparison from logs `newData` & `originalData`

## Functions

### Interact with databases / cache

- `findSomething`
- `deleteSomething`
- `updateSomething`
- `createSomething`

Very confusing part

- `get` vs `fetch` vs `find`

### Transform data from record

- `transformSomething`

### Fetch Records from list

- `fetchSomething`

### Async Job Creation

- `doSomethingLater`

### Validation

- `throwInvalidData()` if throws `error`
- `validateData` if returns `true / false`

## Reference

- [TwoHardThings](https://martinfowler.com/bliki/TwoHardThings.html "https://martinfowler.com/bliki/TwoHardThings.html")
- [Linguistic Anti-patterns](https://www.linguistic-antipatterns.com/?tab=%22Confusable-methods%22 "https://www.linguistic-antipatterns.com/?tab=%22Confusable-methods%22")
