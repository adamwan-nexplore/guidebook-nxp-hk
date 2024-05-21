# Scrum <!-- omit in toc -->

**Table of Contents**

- [1. 3 Keys elements](#1-3-keys-elements)
  - [1.1. Roles](#11-roles)
  - [1.2. Artifacts](#12-artifacts)
  - [1.3. 5 (+1) Events](#13-5-1-events)
- [2. Differences between Scrum and Hybrid Waterfall](#2-differences-between-scrum-and-hybrid-waterfall)
  - [2.1. Scrum VS Hybrid Waterfall](#21-scrum-vs-hybrid-waterfall)
- [3. Definition of Done (DoD)](#3-definition-of-done-dod)
- [4. KanBan in JIRA](#4-kanban-in-jira)
  - [4.1. Development Workflow](#41-development-workflow)
  - [4.2. Special Stages](#42-special-stages)
  - [4.3. Board 1 - Development Board](#43-board-1---development-board)
  - [4.4. Board 2 - Product Board](#44-board-2---product-board)

## 1. 3 Keys elements

### 1.1. Roles

- Product Owner
- Development Team
- Scrum Master

### 1.2. Artifacts

- Product Backlog
- Sprint Backlog
- Increment

### 1.3. 5 (+1) Events

- Sprint - Programming
- Sprint Planning - Meeting
- Daily Scrum - Standup
- Sprint Review - Meeting
- Sprint Retrospectives - Meeting
- (Refinement)

## 2. Differences between Scrum and Hybrid Waterfall

### 2.1. Scrum VS Hybrid Waterfall

- Fixed Time-boxing VS Fixed Scope
- Controllable Scope OR Resources VS Controllable Resources OR Time
- Give up non-core features VS Delay deliveries
- [What is time-boxing](https://www.scruminc.com/what-is-timeboxing "https://www.scruminc.com/what-is-timeboxing")

## 3. [Definition of Done (DoD)](https://www.productplan.com/learn/agile-definition-of-done/#:~:text=Defining%20the%20definition%20of%20done,progress%E2%80%9D%20to%20%E2%80%9Cdone.%E2%80%9D "https://www.productplan.com/learn/agile-definition-of-done/#:~:text=Defining%20the%20definition%20of%20done,progress%E2%80%9D%20to%20%E2%80%9Cdone.%E2%80%9D")

- Code is peer-reviewed
- Code is checked in
- Code is deployed to test environment
- Code/feature passes regression testing
- Code/feature passes smoke testing
- Code is documented
- Help documentation is updated
- Feature is OK’d by stakeholders

In NEXPLORE, DoD is `NOT universal`. Each project needs to define its own DoD before it starts

## 4. KanBan in JIRA

### 4.1. Development Workflow

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

### 4.2. Special Stages

- Draft
  - Placeholders for incomplete ticket details
- Cancelled
  - No longer valid
- Blocked
  - Blocked from progressing

### 4.3. Board 1 - Development Board

- It is a Scrum board
- Designed for development
- Visualize every movement of tasks across system

<img width="1467" alt="Screenshot 2024-01-31 at 6 59 18 AM" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/2f12dc3a-07d3-4fdd-9a55-1b33694a6b5c">

### 4.4. Board 2 - Product Board

- It is a KanBan board
- Designed for product end-to-end journey from ideas to completion
  <img width="1500" alt="Screenshot 2023-05-25 at 5 31 30 PM" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/26caa680-e86c-4d10-981c-c958736b4571">
