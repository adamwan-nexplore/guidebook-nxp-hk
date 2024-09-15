# Scrum <!-- omit in toc -->

Table of Contents

- [3 Keys elements](#3-keys-elements)
  - [Roles](#roles)
  - [Artifacts](#artifacts)
  - [5 (+1) Events](#5-1-events)
- [Differences between Scrum and Hybrid Waterfall](#differences-between-scrum-and-hybrid-waterfall)
  - [Scrum VS Hybrid Waterfall](#scrum-vs-hybrid-waterfall)
- [Definition of Done (DoD)](#definition-of-done-dod)
- [KanBan in JIRA](#kanban-in-jira)
  - [Development Workflow](#development-workflow)
  - [Special Stages](#special-stages)
  - [Board 1 - Development Board](#board-1---development-board)
  - [Board 2 - Product Board](#board-2---product-board)

## 3 Keys elements

### Roles

- Product Owner
- Development Team
- Scrum Master

### Artifacts

- Product Backlog
- Sprint Backlog
- Increment

### 5 (+1) Events

- Sprint - Programming
- Sprint Planning - Meeting
- Daily Scrum - Standup
- Sprint Review - Meeting
- Sprint Retrospectives - Meeting
- (Refinement)

## Differences between Scrum and Hybrid Waterfall

### Scrum VS Hybrid Waterfall

- Fixed Time-boxing VS Fixed Scope
- Controllable Scope OR Resources VS Controllable Resources OR Time
- Give up non-core features VS Delay deliveries
- [What is time-boxing](https://www.scruminc.com/what-is-timeboxing "https://www.scruminc.com/what-is-timeboxing")

## [Definition of Done (DoD)](https://www.productplan.com/learn/agile-definition-of-done/#:~:text=Defining%20the%20definition%20of%20done,progress%E2%80%9D%20to%20%E2%80%9Cdone.%E2%80%9D "https://www.productplan.com/learn/agile-definition-of-done/#:~:text=Defining%20the%20definition%20of%20done,progress%E2%80%9D%20to%20%E2%80%9Cdone.%E2%80%9D")

- Code is peer-reviewed
- Code is checked in
- Code is deployed to test environment
- Code/feature passes regression testing
- Code/feature passes smoke testing
- Code is documented
- Help documentation is updated
- Feature is OK’d by stakeholders

In NEXPLORE, DoD is `NOT universal`. Each project needs to define its own DoD before it starts

## KanBan in JIRA

### Development Workflow

- To Do
- In Progress
  - Development
- Ready for Review
  - Ready for Code Review
- Deployed to Dev
  - Deployed to Dev
- QA Testing
  - QA Testing and Developer Bug Fixing
- Release Ready
  - Scheduled to deploy to UAT
- Deployed to UAT
  - Deployed to UAT
  - Acceptance Testing and sign off by clients / delivery team
- Done
  - DoD has fulfilled

### Special Stages

- Draft
  - Placeholders for incomplete ticket details
- Cancelled
  - No longer valid
- Blocked
  - Blocked from progressing

### Board 1 - Development Board

- It is a Scrum board
- Designed for development
- Visualize every movement of tasks across system

  ![Development Board](https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/2f12dc3a-07d3-4fdd-9a55-1b33694a6b5c)

### Board 2 - Product Board

- It is a KanBan board
- Designed for product end-to-end journey from ideas to completion

  ![Product Board](https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/26caa680-e86c-4d10-981c-c958736b4571)
