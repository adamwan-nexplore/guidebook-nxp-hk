# Scrum

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
    
- Fixed Timeboxing VS Fixed Scope

- Controllable Scope OR Resources VS Controllable Resources OR Time

- Give up non-core features VS Delay deliveries

- [What is timeboxing](https://www.scruminc.com/what-is-timeboxing)

## [Definition of Done (DoD)](https://www.productplan.com/learn/agile-definition-of-done/#:~:text=Defining%20the%20definition%20of%20done,progress%E2%80%9D%20to%20%E2%80%9Cdone.%E2%80%9D)

- Code is peer-reviewed
- Code is checked in
- Code is deployed to test environment
- Code/feature passes regression testing
- Code/feature passes smoke testing
- Code is documented
- Help documentation is updated
- Feature is OK’d by stakeholders

In Nexplore, DoD is `NOT universal`. Each project needs to define its own DoD before it starts

## Story points
    
```
We should `NOT` start any development if there are no story points in the tasks
```

`Fibonacci number` will be a [good](https://www.mountaingoatsoftware.com/blog/why-the-fibonacci-sequence-works-well-for-estimating) tool to follow:

We decide the number of story points based on the followings:

1. the amount of understanding of the task
2. the effort to implement
3. the testing effort on `developers`

### Meaning of each number

- 1 (very easy, can be done in less than 1 hour)
- 2 (easy, but need time to implement and verify, maybe need to spend 1 to several hours)
- 3 (medium, expected to spend around 1 day to finish it)
- 5 (complicated, expected days)
- 8 (very complicated, expected a week)
- 13 (it will be super huge at an idea that we cannot imagine, even cant estiamte the timeline)
- [spike](https://www.visual-paradigm.com/scrum/what-is-scrum-spike)

We need to break down the task into several sub-tasks if the task has more than 8 story points

There is also a possibility that the task has regarded as `spike`. Which means we do not have any ideas how it is going to implement.

## Kanban in JIRA
    
### Development Workflow
- To Do
- In Progress
    => Development
- Ready for Review
    => Ready for Code Review
- Deployed to Dev
    => Deployed to Dev
- QA Testing
    => QA Testing and Developer Bug Fixing
- Release Ready
    => Scheduled to deployment
- Done
    => DoD has fulfilled. Now DONE means `deployment to UAT site`

### Special Stages
- Draft
    => Placeholders for incomplete ticket details
- Cancelled
    => No longer valid
- Blocked
    => Blocked from progressing

### Board 1 - Development Board

- It is a Scrum board
- Designed for development

<img width="1463" alt="Screenshot 2023-05-25 at 5 31 49 PM" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/3d2b1ef4-0690-4a76-a521-6de103e7a317">

### Board 2 - Product Board

- It is a Kanban board
- Designed for product end-to-end journey from ideas to completion
<img width="1500" alt="Screenshot 2023-05-25 at 5 31 30 PM" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/26caa680-e86c-4d10-981c-c958736b4571">
