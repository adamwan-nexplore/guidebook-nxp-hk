# Data Migration <!-- omit in toc -->

Table of Contents

- [Requirements](#requirements)
  - [Types of Data](#types-of-data)
  - [Source \& Destination](#source--destination)
  - [Scope](#scope)
- [Preparation](#preparation)
  - [Scripting](#scripting)
  - [Actual amount of work](#actual-amount-of-work)
  - [Time](#time)
  - [Engineers Input](#engineers-input)
  - [Data Quality](#data-quality)
  - [Drill](#drill)
  - [Manual Data \& Configuration](#manual-data--configuration)
  - [Execution agenda](#execution-agenda)
- [Execution](#execution)
- [Follow-ups](#follow-ups)

## Requirements

### Types of Data

- Records in Database
- Files
  - Any convenient tools to transfer directly?
- Hardcoded data in old system

### Source & Destination

- same kind of database?
- same table structure?
- same field & table naming?

- same kind of storage solution?
- same folder structure?
- same filename?

### Scope

- All Records vs Selected Set of data
- Confirmed Scope
- Manual effort
- User Migration (Login required)

## Preparation

### Scripting

- for Data Migration
- for File Migration
- for User Migration
- for Testing
- Code Review on scripts
- SINGLE Document on EACH script

### Actual amount of work

### Time

- Estimate the execution time

### Engineers Input

- Enough engineers

### Data Quality

- whether data cleanup is needed
  - normalize emails
  - duplicate data
  - corrupted data

### Drill

- who to test
- what to test
- use real project(s)
- Measure the time needed for each step

### Manual Data & Configuration

- who is going to do
- when can be complete
- block the normal use?

### Execution agenda

- Start date & time
- (Expected) Finish date & time
- Task Checklist
  - Define execution order on EACH task
  - Identify if task can execute at the same time

## Execution

- Good and stable NETWORK
- Start ahead

  - ANY static / old data can be DONE beforehand
    - files half year from NOW

- Let the stakeholders know when
  - Start Migration
  - Finish Migration
  - Testing Ready
  - Start Testing
  - Finish Testing
  - Issues
- Focus
  - Do not arrange any extra work
- Get help if necessary
- Errors
  - Fix those only if it a critical blockers
  - Be avoid to add something not on the scope

## Follow-ups

1. Monitor and fix critical data issues for 1 week post-migration

2. Prioritize and schedule any additional tasks discovered
