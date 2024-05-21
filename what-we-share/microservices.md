# Microservices <!-- omit in toc -->

**Table of Contents**

- [1. Unpopular Opinion](#1-unpopular-opinion)
- [2. Introduction](#2-introduction)
- [3. ~~Buzzwords~~ Characteristics](#3-buzzwords-characteristics)
- [4. Relationship with Software-oriented Architecture](#4-relationship-with-software-oriented-architecture)
- [5. Comparison](#5-comparison)
- [6. Beauty \& Ugly](#6-beauty--ugly)
- [7. Service Boundary](#7-service-boundary)
  - [7.1 Coupling](#71-coupling)
- [8. Communication Protocols](#8-communication-protocols)
  - [8.1. Ideally](#81-ideally)
  - [8.2. Choices](#82-choices)
- [9. Reference](#9-reference)

## 1. Unpopular Opinion

- One new system should start from monolith unless you are 100% sure you have enough engineers and [C10k](https://en.wikipedia.org/wiki/C10k_problem "https://en.wikipedia.org/wiki/C10k_problem") traffic when you launch the system

## 2. Introduction

- Service - an application processes & returns information to another application
- Microservices - independently deployable services (Boundary)

## 3. ~~Buzzwords~~ Characteristics

- Business domain - focus on one business function
- Own state - the state can only _manipulate_ by itself
- Size - meaningless
- Flexibility / Alignment of Architecture & Organization - reduce Work Friction

## 4. Relationship with Software-oriented Architecture

- The alternative approach to Monolithic architecture
- Multiple services vs Big-bang service
- Microservices is a collection of opinionated practices to do SOA `well`

## 5. Comparison

- Monolith
  - Big Bang (Can be Bad)
  - Modular Monolith
- SOA
  - Distributed Monolith (Bad)
  - Microservices

## 6. Beauty & Ugly

- Clear Boundary

  - O Mature Production to fit the scaling & organization needs
  - X Startup / MVP / New Projects

- More Services
  - O Big Teams -> Autonomous teams can work concurrently
  - X Small Teams -> Same piece of work need to do repeatedly

## 7. Service Boundary

- Define service boundary is VERY hard
- It requires A LOT OF business validation to seek for the correct one
- DO NOT strive for CLEAR boundary first
- ALWAYS strive for CLEAR nature of each level

### 7.1 Coupling
- Domain coupling (Lowest)
  - consume functionality from another independent service
- Pass-Through coupling
  - consume functionality from another independent service through an immediate service
- Common Coupling
  - shared data, e.g. flipping global state
- Content Coupling (Highest)
  - shared logic together

## 8. Communication Protocols

### 8.1. Ideally

- Make backward compatibility
- Explicit interface
- Technology neutral
- Simple
- No details leaked

### 8.2. Choices

- Remote Procedural Calls
  - SOAP
  - gRPC
- REST
  - Richardson Maturity Model Level 2
  - JSON::API -> HATEOAS ? -> Too much?
- GraphQL
- Message Broker
  - webhook?

## 9. Reference

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing "https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing")
- [Building Microservices](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018 "https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018")
