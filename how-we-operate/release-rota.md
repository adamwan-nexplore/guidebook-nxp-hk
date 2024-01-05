# Continuous Delivery & Release Rota

## Continuous Delivery
> Continuous Delivery is achieved by working so that our software is always in a releasable state
> - Quote from Continuous Delivery Pipelines

The important elements of Continous Delivery are
- Lean Mentality
- Agile Practices
-> DevOps Culture

- The practices are Delivery Pipelines
- Is a workflow to delivery a Qualified Software to Users
- Some parts can be automated by machine, it often provides FAST, repeatable, standardized and unified response
- We use Microsoft Teams (ChatOps) as our uniformed platfrom to aggregate it
- Some parts require human involvement, it is often more flexible, complicated and mirror the reality

## Release Rota

The only meaningful definition of done to us is to delivery the features to ACTUAL users

There are many cases to cause the delivery blocking
- Bugs
- Vulnerability Update
- Database Migration failed

- Although we have a variety of components to detect those
    - Daily Regular Build
    - Automated Test Cases
    - Automated Data Migration Tests
    - Realtime Monitoring on Full Environments
    - Code Review from Peers
- We might probably need further investigation, confirmation and deployment to promote the features
- That is why we have release manager to focus on those stuff.

- Dedicated to review the issues from APM, Pipelines sit in ChatOps
- Once issues appeared and blocked the delivery flow, make sure engineer responsibles aware of those and fix those ASAP
- A diffused responsiblitiy of Release Manager, every engineer should take part of it on ROTA

## Reference
- [Continuous Delivery Pipelines](https://leanpub.com/cd-pipelines "https://leanpub.com/cd-pipelines")

