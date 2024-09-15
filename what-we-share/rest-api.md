# REST API Design <!-- omit in toc -->

Table of Contents

- [Concepts](#concepts)
  - [Six Constraints](#six-constraints)
- [Interfaces of Rest API](#interfaces-of-rest-api)
  - [Input](#input)
    - [Non REST](#non-rest)
    - [REST (1)](#rest-1)
    - [REST (2)](#rest-2)
    - [HTTP Verbs](#http-verbs)
  - [Output](#output)
    - [Status Code](#status-code)
    - [Examples](#examples)
- [Discussion (1)](#discussion-1)
  - [All actions with side effect target one resource at one call. WHY???](#all-actions-with-side-effect-target-one-resource-at-one-call-why)
  - [Is it possible to handle multiple different resources / same resource with different types at one call?](#is-it-possible-to-handle-multiple-different-resources--same-resource-with-different-types-at-one-call)
  - [If supporting multiple resources in a single call, think about -](#if-supporting-multiple-resources-in-a-single-call-think-about--)
- [Standard \& Framework](#standard--framework)
  - [Richardson Maturity Model](#richardson-maturity-model)
  - [JSON::API](#jsonapi)
- [Discussion (2)](#discussion-2)
  - [Singular resource vs Plural resource(s)?](#singular-resource-vs-plural-resources)
  - [How to configure different shape of the output?](#how-to-configure-different-shape-of-the-output)
  - [How to add some additional checking?](#how-to-add-some-additional-checking)
- [Issues on REST](#issues-on-rest)
  - [If working for multiple resources](#if-working-for-multiple-resources)
  - [Hard to describe some endpoints accurately through REST](#hard-to-describe-some-endpoints-accurately-through-rest)
  - [Very hard to describe non-data status change](#very-hard-to-describe-non-data-status-change)
  - [Filter collection data can be very very hard](#filter-collection-data-can-be-very-very-hard)
- [Reference](#reference)

## Concepts

- [REST](https://en.wikipedia.org/wiki/Representational_state_transfer "https://en.wikipedia.org/wiki/Representational_state_transfer") = REpresentational State Transfer

- Safe API

### Six Constraints

- Uniform interface
- Client–server
- Stateless
- Cache-able
- Layered system
- Code on demand (optional)

## Interfaces of Rest API

### Input

- Resource must be noun, no verbs in URI

#### Non REST

- `GET https://api.control.nexplore.com/core/ + getEntity/:id`
- HTTP Verb: (no use)
- URI: (directory) + action + resource + identifier

#### REST (1)

- `GET https://api.control.nexplore.com/core/ + entities/:id`
- HTTP Verb: action
- URI: (directory) + resource + identifier

#### REST (2)

- `GET https://api.control.nexplore.com/core/ + entities`
- HTTP Verb: action
- URI: (directory) + resource (collection)

#### HTTP Verbs

- ONLY use the followings

- Create: Post
- Retrieve: Get
- Remove: Delete
- Replace: Put
- Partial Update: Patch

### Output

#### Status Code

- Create: 201
- Retrieve: 200
- Remove: 204
- Replace: 200
- Partial Update: 200
- (Async task): 202
- (User Errors): 4XX
- (System Errors): 5XX

#### Examples

- Retrieve one: `GET /entities/:id`
- Retrieve all: `GET /entities`
- Create: `POST /entities`
- Update/Replace: `PATCH or PUT /entities/:id`
- Remove: `DELETE /entities/:id`

## Discussion (1)

### All actions with side effect target one resource at one call. WHY???

### Is it possible to handle multiple different resources / same resource with different types at one call?

- mPOST?
- mGET?
- mPUT?

### If supporting multiple resources in a single call, think about -

- How to manage transaction when more than one resources?
- How to manage failures? rollback / atomic / best effort

## Standard & Framework

### [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html "https://martinfowler.com/articles/richardsonMaturityModel.html")

- Level 0 - None
- Level 1 - Resources
- Level 2 - HTTP Verbs
- Level 3 - Hypermedia Controls

### [JSON::API](https://jsonapi.org "https://jsonapi.org")

- A complete specification on how to implement REST API Level 3

## Discussion (2)

### Singular resource vs Plural resource(s)?

- De facto standard: plural (but opinionated)

### How to configure different shape of the output?

- use of query as the additional parameters

### How to add some additional checking?

- put those information to header?

## Issues on REST

### If working for multiple resources

- how to make it transactional?

### Hard to describe some endpoints accurately through REST

- too little operations allowed (verbs)

e.g.

- upload
- send
- deliver

### Very hard to describe non-data status change

- lock / unlock / approved?

### Filter collection data can be very very hard

- Query parameter is hard to specify data with types (string based)

e.g.

- null vs 'null' vs undefined vs '' (empty string)

-> Graphql

## Reference

- [API Design Patterns](https://www.manning.com/books/api-design-patterns "https://www.manning.com/books/api-design-patterns")
- [Web API的设计与开发(Chinese)](https://book.douban.com/subject/27054104 "https://book.douban.com/subject/27054104") or [Web API: The Good Parts (Japanese)](https://www.amazon.co.jp/Web-API-Parts-%E6%B0%B4%E9%87%8E-%E8%B2%B4%E6%98%8E/dp/4873116864 "https://www.amazon.co.jp/Web-API-Parts-%E6%B0%B4%E9%87%8E-%E8%B2%B4%E6%98%8E/dp/4873116864")
- [REST API Tutorial](https://restfulapi.net "https://restfulapi.net")
- [Dissertation - Architectural Styles and the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf "https://ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf")
