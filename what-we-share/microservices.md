# Microservices

## Unpopular Opinion

- One new system should start from monolith unless you are 100% sure you have enough engineers and [C10k](https://en.wikipedia.org/wiki/C10k_problem "https://en.wikipedia.org/wiki/C10k_problem") traffic when you launch the system

## Introduction

- Service - an application processes & returns information to another application
- Microservices - independently deployable services (Boundary)

## ~~Buzzwords~~ Characteristics

- Business domain - focus on one business function
- Own state - the state can only _manipulate_ by itself
- Size - meaningless
- Flexibility / Alignment of Architecture & Organization - reduce Work Friction

## Relationship with Software-oriented Architecture

- The alternative approach to Monolithic architecture
- Multiple services vs Big-bang service
- Microservices is a collection of opinionated practices to do SOA `well`

## Comparison

- Monolith
  - Big Bang (Can be Bad)
  - Modular Monolith
- SOA
  - Distributed Monolith (Bad)
  - Microservices

## Beauty & Ugly

- Clear Boundary

  - O Mature Production to fit the scaling & organization needs
  - X Startup / MVP / New Projects

- More Services
  - O Big Teams -> Autonomous teams can work concurrently
  - X Small Teams -> Same piece of work need to do repeatedly

## Service Boundary

- Domain coupling (Lowest)
  - consume functionality from another independent service
- Pass-Through coupling
  - consume functionality from another independent service through an immediate service
- Common Coupling
  - shared data, .e.g flipping global state
- Content Coupling (Highest)
  - shared logic together

## Communication Protocols

### Ideally

- Make backward compatibility
- Explicit interface
- Technology neutral
- Simple
- No details leaked

### Choices

- Remote Procedural Calls
  - SOAP
  - gRPC
- REST
  - Richardson Maturity Model Level 2
  - JSON::API -> HATEOAS ?
- GraphQL
- Message Broker
  - webhook?

### Reference

- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing "https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing")
- [Building Microservices](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018 "https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018")
