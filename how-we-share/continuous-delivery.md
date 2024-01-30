# Continuous Delivery

## Before it starts

* This section is on best practices

1. What is continuous delivery?
2. What is the essential part of it?
3. Fast and Slow?

```
Software deliveries no values if its features are not available (Engineering)
Software deliveries no values if it is not used (Product)
Software deliveries less values if it is not used efficiently (Design + Operations)
```

Continuous Delivery is a movement that 
- deploy change to the actual environment simply by confirmation
- every change has verified FAST (< 5 mins)
    - deployable (build tests)
    - correctness on business logic (unit tests, integration tests)
    - integration between components (integration tests, migraiton tests)
    - security (vulnerability check)
    - style (linting)
- make sure it is transparent and visible
    - pull requests for next pipeline change
    - notify release manager about the release stages

Additional Topics

- [Software supply chain security](https://cloud.google.com/software-supply-chain-security/docs/overview "https://cloud.google.com/software-supply-chain-security/docs/overview")