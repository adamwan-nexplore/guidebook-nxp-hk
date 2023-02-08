# Deployment


## Risk Analysis

### Risky Items
- Infrastructure Change
- New Environment Variables
- DB Schema Change
- Seed Data
- Incompatible Endpoint Interfaces (Params, Query, Body)
- Huge Code Change
- Deploy during Peak Hours?

### General Guide
- 0 to 1 => Normal
- 2 to 3 => Medium
- More than 4 => High

```
The last one is super risky in all cases!
```

## Action

Normal Risk
- Production Cross Check
- Health Check
- [Trunk based development](https://trunkbaseddevelopment.com)

Medium Risk
- Test Cases Demonstration (Either manual or automated)
- [Feature Toggling](https://martinfowler.com/articles/feature-toggles.html)
- Always [Dark Launch](https://martinfowler.com/bliki/DarkLaunching.html) first

High Risk
- [Blue Green Deployment](https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment)
- [Canary Release](https://martinfowler.com/bliki/CanaryRelease.html)
