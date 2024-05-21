# Continuous Delivery & Release Rota <!-- omit in toc -->

**Table of Contents**

- [1. Continuous Delivery](#1-continuous-delivery)
- [2. Old School Jargons](#2-old-school-jargons)
  - [2.1. Practical Considerations](#21-practical-considerations)
  - [2.2. What kinds of pipelines we should have](#22-what-kinds-of-pipelines-we-should-have)
- [3. Release Rota](#3-release-rota)
- [4. Reference](#4-reference)

## 1. Continuous Delivery

> Continuous Delivery is achieved by working so that our software is always in a releasable state
>
> - Quote from Continuous Delivery Pipelines

## 2. Old School Jargons

- Continuous Integration
- Continuous Deployment
- Continuous Exploration

You might check the full explanation by SAFe Studio [here](https://scaledagileframework.com/continuous-delivery-pipeline "https://scaledagileframework.com/continuous-delivery-pipeline")

### 2.1. Practical Considerations

We can simply define the whole processes by two parts

- Continuous Delivery Pipelines
  - Machine handling all the repeated tasks
- Release ROTA
  - The person compensates on non-repeated tasks and irregular blockers

The important elements of Continuous Delivery are

- Lean Mentality
- Agile Practices
  -> DevOps Culture

- The practices are Delivery Pipelines (Machines)
- Is a workflow to delivery a Qualified Software to Users
- Some parts can be automated by machine, it often provides FAST, repeatable, standardized and unified response
- We use Microsoft Teams (ChatOps) as our uniformed platform to aggregate it
- Some parts require human involvement, it is often more flexible, complicated and mirror the reality

### 2.2. What kinds of pipelines we should have

Two Important Pipelines

- Explore the needs & Extract data for further development (Continuous Exploration)
- Lint / Test + Build + Publish (Continuous Integration) + Deploy (Continuous Deployment)

To reduce the lead time and get the feedback as fast as possible, change has published should be visible in actual environments (either, development, test or production)

## 3. Release Rota

The only meaningful definition of done to us is to delivery the features to ACTUAL users

There are many cases to cause the delivery blocking

- Bugs
- Vulnerability Update
- Database Migration failed

- Although we have a variety of components to detect those
  - Daily Regular Build
  - Automated Test Cases
  - Automated Data Migration Tests
  - Realtime Monitoring on Production Environments
  - Code Review from Peers
- We might probably need further investigation, confirmation and deployment to promote the features
- That is why we have release manager to focus on those stuff.

- Dedicated to review the issues from APM, Pipelines sit in ChatOps
- Once issues appeared and blocked the delivery flow, make sure engineer responsible aware of those and fix those ASAP
- A diffused responsibility of Release Manager, every engineer should take part of it on ROTA

## 4. Reference

- [Continuous Delivery Pipelines](https://leanpub.com/cd-pipelines "https://leanpub.com/cd-pipelines")
