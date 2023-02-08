# Gitflow (Drafted)

- We promote and aim at transiting against a linear flow based on `dev-qc-deployment`.
- The change from `dev-qc-deployment` to all `uat-*-deployment` MUST be done through `git rebase`.
- If the clients do not have its own UAT branch, the source will go from `uat-apac-deployment`.

### Development

```mermaid
flowchart LR
    base(dev-qc-deployment) -->|branch out| feature(feature/XXX)
    feature -->|promote| newbase(dev-qc-deployment)
    newbase -->|tag| releasetag((Base Release))
    releasetag -->|promote| candidate(uat-*-deployment)
```

### Fix
```mermaid
flowchart LR
    base(dev-qc-deployment) -->|branch out| fix(fix/XXX)
    fix -->|promote| newbase(dev-qc-deployment)
    newbase -->|rebase| releasetag((Base Release))
    releasetag -->|tag| patcherelease((Patch Release))
    patcherelease -->|promote| candidate(uat-*-deployment)
```

### Deployment
```mermaid
flowchart LR
    candidate(uat-*-deployment) -->|sign & promote| production(prod-*-deployment)
```
