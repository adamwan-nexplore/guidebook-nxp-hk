# Change Management <!-- omit in toc -->

**Table of Contents**

- [1. The Key Person](#1-the-key-person)
  - [1.1. Responsibilities](#11-responsibilities)
- [2. Risk Analysis](#2-risk-analysis)
  - [2.1. Risky Items](#21-risky-items)
  - [2.2. General Guide](#22-general-guide)
- [3. Action](#3-action)
  - [3.1. Deployment Check](#31-deployment-check)
- [4. Reference](#4-reference)

## 1. The Key Person

**Release Manager** is a role that everyone should work on.

### 1.1. Responsibilities

- Make sure CD is working as expected (green)
- Be in charge of the release flow from UAT to Production
- Health check after the release to production has done
- Make sure the tasks in JIRA do flow if they have stayed without any reasons (usually less than two days)
- Handle and communicate between the operators if necessary

## 2. Risk Analysis

### 2.1. Risky Items

- Infrastructure Change
- New Environment Variables
- DB Schema Change
- Seed Data
- Incompatible Endpoint Interfaces (Params, Query, Body)
- Huge Code Change
- Deploy during Peak Hours?

### 2.2. General Guide

- 0 to 1 => Normal
- 2 to 3 => Medium
- More than 4 => High

> The last one is super risky in all cases!

## 3. Action

Normal Risk

- Production Cross Check
- Health Check

Medium Risk

- Test Cases Demonstration (Either manual or automated)
- [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html "https://martinfowler.com/articles/feature-toggles.html")
- Always [Dark Launch](https://martinfowler.com/bliki/DarkLaunching.html "https://martinfowler.com/bliki/DarkLaunching.html") first

High Risk

- [Blue Green Deployment](https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment "https://www.redhat.com/en/topics/devops/what-is-blue-green-deployment")
- [Canary Release](https://martinfowler.com/bliki/CanaryRelease.html "https://martinfowler.com/bliki/CanaryRelease.html")

### 3.1. Deployment Check

- An engineer who deploy the change should do at least a health check in the test entity on the production environments
- Please make sure you have the access to the test entity before the deployment
- If you do not have it, please ask your engineering lead

## 4. Reference

- [How can rotating release managers improve a project's velocity and stability?](https://softwareengineering.stackexchange.com/questions/159789/how-can-rotating-release-managers-improve-a-projects-velocity-and-stability "https://softwareengineering.stackexchange.com/questions/159789/how-can-rotating-release-managers-improve-a-projects-velocity-and-stability")
