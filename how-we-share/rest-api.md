# REST API Design

[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) = REpresentational State Transfer

## 1. Concepts

- Uniform Interface

- Layered System

- Cacheable

- Safe API

- API is Idempotent

- API is Statelessness

### 1.1 Six Constraints

- Uniform interface
- Client–server
- Stateless
- Cacheable
- Layered system
- Code on demand (optional)

## 2. Interfaces of Rest API
### 2.1 Input

```
Resource must be noun, no verbs in URI
```

#### 2.1.1 Non REST

- GET https://api.control.nexplore.com/core/ + getEntity/:id
- HTTP Verb: (no use)
- URI: action + (directory) + resource + identifier

#### 2.1.2 REST (1)
- GET https://api.control.nexplore.com/core/ + entities/:id
- HTTP Verb: action
- URI: (directory) + resource + identifier

#### 2.1.3 REST (2)
- GET https://api.control.nexplore.com/core/ + entities
- HTTP Verb: action
- URI: (directory) + resource (collection)

#### 2.2 HTTP Verb:

* ONLY use the followings

- Create: Post
- Retrieve: Get
- Remove: Delete
- Replace: Put
- Partial Update: Patch

### 2.2 Output
#### 2.2.1 Status Code

- Create: 201
- Retrieve: 200
- Remove: 204

- Replace: 200
- Partial Update: 200

- (Async task): 202
- (User Errors): 4XX
- (System Errors): 5XX

#### 2.2.2 Example of REST endpoint collection
- Retrieve one: GET /entities/:id
- Retrieve all: GET /entities
- Create: POST /entities
- Update/Replace: PATCH or PUT /entities/:id
- Remove: DELETE /entites/:id


## 3. Discussion (1)
### 3.1 All actions with side effect target one resource at one call. WHY???
### 3.2 Is it possible to handle multiple different resources /  same resource with different types at one call?
- mPOST ?
- mGET ?
- mPUT ?
### 3.3 If supporting multiple resources in a single call, think about:
- How to manage transaction when more than one resources?
- how to manage failures? / rollback? / atomic? / best effort?

## 4. Standard & Frameworks
### 4.1 [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)
* Level 0 - None
* Level 1 - Resources
* Level 2 - HTTP Verbs
* Level 3 - Hypermedia Controls

### 4.2 [JSON::API](https://jsonapi.org)
- A complete specifications on how to implement Rest API Level 3


## 5. Discussion (2)

### 5.1 Singular resource vs Plural resource(s)?
It depends, in general it is always plural (opinionated)

### 5.2 How to configure different shape of the output?
Use of query as the additional parameters

### 5.3 How to add some additional checking?
Put those information to header

## 6. Issues on REST
### 6.1 If working for mutliple resources
how to make it transactional?

### 6.2 Hard to describe some endpoints accurately through REST
too little operations allowed (verbs) - upload / send / deliver?

### 6.3 Very hard to describe non-data status change
lock / unlock / approved?

### 6.4 Filter collection data can be very very hard
and query parameter is hard to specify data with types (null vs 'null' vs undefined vs '' (empty string)) -> Graphql


## 7. Reference 
- [API Design Patterns](https://www.manning.com/books/api-design-patterns)
- [Web API的设计与开发(Chinese)](https://book.douban.com/subject/27054104) or [Web API: The Good Parts (Japanese)](https://www.amazon.co.jp/Web-API-Parts-%E6%B0%B4%E9%87%8E-%E8%B2%B4%E6%98%8E/dp/4873116864)
- https://docs.oracle.com/en/cloud/saas/marketing/eloqua-develop/Developers/GettingStarted/APIRequests/HTTP-verbs.htm
- [REST API Tutorial](https://restfulapi.net)
