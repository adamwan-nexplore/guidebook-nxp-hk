# Data Migration

## 1. Requirements

### 1.1 Types of Data
- Records in Database
- Files
    - Any convenient tools to transfer directly?
- Hardcoded data in old system

### 1.2 Source & Destination
- same kind of database?
- same table structure?
- same field & table naming?

- same kind of storage solution?
- same folder structure?
- same filename?

### 1.3 Scope
- All Records vs Selected Set of data
- Confirmed Scope
- Manual effort
- User Migration (Login required)

## 2. Preparation

### 2.1 Scripting
- for Data Migration
- for File Migration
- for User Migration
- for Testing
- Code Review on scripts
- SINGLE Document on EACH script

### 2.2 Actual amount of work 

### 2.3 Time 
- Estimate the execution time

### 2.4 Engineers input
- Enough engineers

### 2.5 Data Quality
- whether data cleanup is needed
    - normalize emails
    - duplicate data
    - corrupted data

### 2.6 Drill
- who to test
- what to test
- use real project(s)
- Measure the time needed for each step

### 2.7 Manual Data & Configuration
- who is going to do
- when can be complete
- block the normal use?

### 2.8 Execution agenda
- Start date & time
- (Expected) Finish date & time
- Task Checklist
    - Define execution order on EACH task
    - Identify if task can execute at the same time

## 3. Execution
- Good and stable NETWORK
- Start ahead
    - ANY static / old data can be DONE beforehead
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
    - Avoid to add something not on the scope

## 4. Follow-ups
- Be mindful for data fix for one week after the migration
- Discuss the priority and timeline of extra work found
