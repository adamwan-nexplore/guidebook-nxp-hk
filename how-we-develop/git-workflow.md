# Git Workflow <!-- omit in toc -->

**Table of Contents**

- [Introduction](#introduction)
- [Development](#development)
- [Hotfix](#hotfix)

## Introduction

- We are using `trunk-based development`, you can check [here](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development "Trunk-based development - Learn why this version control management practice is common practice among DevOps teams."), [here](https://trunkbaseddevelopment.com "Trunk Based Development: Introduction") and [here](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development "Prevent merge-conflict hassles with trunk-based development practices")
- We promote and aim at transiting to a linear flow based on `dev-deployment`
- The change from `dev-deployment` to all `uat-deployment` MUST be done through `git merge`
- The change from `uat-deployment` to all `prod-deployment` MUST be done through `git merge`

## Development

```mermaid
---
title: Branch Transition on Submitting a Feature / Fix
---
flowchart TD
    develop(dev-deployment)
    feature(feature/XXX)
    uat(uat-deployment)
    prod(prod-*-deployment)
    start([Start])
    finish([finish])

    dev-env[DEV ENV]
    uat-env[UAT ENV]
    prod-env[PROD ENVs]

    style develop stroke:#f00
    style uat stroke:#A020F0
    style prod stroke:#00f

    style dev-env fill:#f00
    style uat-env fill:#A020F0
    style prod-env fill:#00f

    start --> feature
    develop -->|branch out| feature -->|rebase| develop -->|merge| uat -->|sign-off & merge| prod --> finish

    develop -..->|deploy| dev-env
    uat -..->|deploy| uat-env
    prod -..->|deploy| prod-env
```

## Hotfix

```mermaid
---
title: Branch Transition on Hotfix
---
flowchart TD
    develop(dev-deployment)
    hotfix(hotfix/XXX)
    uat(uat-deployment)
    prod(prod-*-deployment)
    start([Start])
    finish([finish])

    dev-env[DEV ENV]
    uat-env[UAT ENV]
    prod-env[PROD ENVs]

    style develop stroke:#f00
    style uat stroke:#A020F0
    style prod stroke:#00f

    style dev-env fill:#f00
    style uat-env fill:#A020F0
    style prod-env fill:#00f

    start --> hotfix
    develop -->|branch out| hotfix -->|cherry-pick| uat -->|merge| develop
    hotfix -->|rebase| develop

    uat -->|sign-off & merge| prod --> finish

    develop -..->|deploy| dev-env
    uat -..->|deploy| uat-env
    prod -..->|deploy| prod-env
```
