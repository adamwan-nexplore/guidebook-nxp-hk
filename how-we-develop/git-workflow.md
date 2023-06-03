# Git Workflow

- We are transiting to `trunk-based development`, you can check [here](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development), [here](https://trunkbaseddevelopment.com/) and [here](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development)
- We promote and aim at transiting against a linear flow based on `dev-qc-deployment`
- The change from `dev-qc-deployment` to all `uat-*-deployment` MUST be done through `git merge`
- If the client does not have its own UAT site, the source will go from `uat-anz-deployment`

### Development

```mermaid
flowchart LR
    base(dev-qc-deployment) -->|branch out| feature(feature/XXX)
    feature -->|rebase| newbase(dev-qc-deployment)
    newbase -->|merge| candidate(uat-*-deployment)
```

### Fix
```mermaid
flowchart LR
    base(dev-qc-deployment) -->|branch out| fix(fix/XXX)
    fix -->|rebase| base
    fix -->|cherry-pick| candidate(uat-*-deployment)
    candidate -->|merge| base
```

### Deployment
```mermaid
flowchart LR
    candidate(uat-*-deployment) -->|sign-off & merge| production(prod-*-deployment)
```
