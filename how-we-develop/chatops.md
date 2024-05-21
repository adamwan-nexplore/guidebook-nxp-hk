# ChatOps <!-- omit in toc -->

**Table of Contents**

- [1. Objectives](#1-objectives)
- [2. Implementation](#2-implementation)
- [3. Tools](#3-tools)
  - [3.1. GitHub](#31-github)
    - [3.1.1. Channels](#311-channels)
    - [3.1.2. Setup](#312-setup)
    - [3.1.3. Benefits](#313-benefits)
  - [3.2. RSS](#32-rss)
    - [3.2.1. Channels](#321-channels)
    - [3.2.2. Setup](#322-setup)
    - [3.2.3. Benefits](#323-benefits)
  - [3.3. Jira Cloud](#33-jira-cloud)
    - [3.3.1. Apps](#331-apps)
    - [3.3.2. Setup](#332-setup)
    - [3.3.3. Benefits](#333-benefits)
  - [3.4. DataDog](#34-datadog)
    - [3.4.1. Channels](#341-channels)
    - [3.4.2. Setup](#342-setup)
    - [3.4.3. Benefits](#343-benefits)
  - [3.5. Figma](#35-figma)
    - [3.5.1. Benefits](#351-benefits)
- [4. Reference](#4-reference)

## 1. Objectives

- Remove unnecessary disturbance to check emails regularly
- Centralize all the notifications and system activities in the same platform
- Provide a more real-time and interactive way to receive the messages

## 2. Implementation

We will stream most notifications to [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software")

## 3. Tools

### 3.1. GitHub

#### 3.1.1. Channels

- `[Backend] Deployment Notifications`
- `[Backend] Repo Notifications`
- `[Frontend] Deployment Notifications`
- `[Frontend] Repo Notifications`
- `[Mobile] Deployment Notifications`
- `[Mobile] Repo Notifications`

> Please ask your engineering lead for the access to those channels

#### 3.1.2. Setup

- Go to the channels above
- Connect your GitHub Account through GitHub Bot

#### 3.1.3. Benefits

- `Tagged` Notifications triggered when someone tags you in GitHub
- Notifications of any kinds of changes / deployment has made to those repositories

To set up a new channel from scratch, please check it [here](https://github.com/integrations/microsoft-teams "https://github.com/integrations/microsoft-teams")

### 3.2. RSS

#### 3.2.1. Channels

- `[Backend] Platform Status Alert`

* Please ask your engineering lead for the access to those channels

#### 3.2.2. Setup

- N/A

#### 3.2.3. Benefits

- Service Availability updates of different platforms we use
- This is the list of [Server Status](serverrss.md)

### 3.3. Jira Cloud

#### 3.3.1. Apps

- Jira Cloud

#### 3.3.2. Setup

- Search `Jira Cloud`
- Sign in your Atlassian account
- Pin Jira Cloud in MS Teams

#### 3.3.3. Benefits

- Notifications from all the tickets in Jira you have tagged and involved

### 3.4. DataDog

#### 3.4.1. Channels

- channels in the team `DataDog Monitor`
  > Please ask your engineering lead for the access to those channels / Teams

#### 3.4.2. Setup

- N/A

#### 3.4.3. Benefits

- Notifications from the running backend APIs in case there are any errors

### 3.5. Figma

- Find and select the Figma app
- From the app's chat box, type Connect and send the message
- Follow the prompts to connect your Figma account
- Once connected, type `On` into the chat box and send the message to enable notifications.

Check [here](https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams "https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams")

#### 3.5.1. Benefits

- Notifications from all the comments in Figma you have tagged and involved

- Illustrations
  <img width="1000" alt="figma set up" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/8ba28515-17a7-403f-a8db-37e4a8333ea0">
  <img width="1000" alt="figma ChatOps" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/f0a5dc82-a73a-4208-ae59-c0a454f66058">

## 4. Reference

- [What are the Benefits of ChatOps](https://www.ibm.com/cloud/blog/benefits-of-chatops "https://www.ibm.com/cloud/blog/benefits-of-chatops")
