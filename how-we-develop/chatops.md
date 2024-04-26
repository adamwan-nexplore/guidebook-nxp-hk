# ChatOps

## Objectives

- Remove unnecessary disturbance to check emails regularly
- Centralize all the notifications and system activities in the same platform
- Provide a more real-time and interactive way to receive the messages

## Implementation

We will stream most notifications to [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software")

## Tools

### 1. GitHub

#### Channels

- `[Backend] Deployment Notifications`
- `[Backend] Repo Notifications`
- `[Frontend] Deployment Notifications`
- `[Frontend] Repo Notifications`
- `[Mobile] Deployment Notifications`
- `[Mobile] Repo Notifications`

> Please ask your engineering lead for the access to those channels

#### Setup

- Go to the channels above
- Connect your GitHub Account through GitHub Bot

#### Benefits

- `Tagged` Notifications triggered when someone tags you in GitHub
- Notifications of any kinds of changes / deployment has made to those repositories

To set up a new channel from scratch, please check it [here](https://github.com/integrations/microsoft-teams "https://github.com/integrations/microsoft-teams")

### 2. RSS

#### Channels

- `[Backend] Platform Status Alert`

* Please ask your engineering lead for the access to those channels

#### Setup

- N/A

#### Benefits

- Service Availability updates of different platforms we use
- This is the list of [Server Status](serverrss.md)

### 3. Jira Cloud

#### Apps

- Jira Cloud

#### Setup

- Search `Jira Cloud`
- Sign in your Atlassian account
- Pin Jira Cloud in MS Teams

#### Benefits

- Notifications from all the tickets in Jira you have tagged and involved

### 4. DataDog

#### Channels

- channels in the team `DataDog Monitor`
  > Please ask your engineering lead for the access to those channels / Teams

#### Setup

- N/A

#### Benefits

- Notifications from the running backend APIs in case there are any errors

### 5. Figma

- Find and select the Figma app
- From the app's chat box, type Connect and send the message
- Follow the prompts to connect your Figma account
- Once connected, type `On` into the chat box and send the message to enable notifications.

Check [here](https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams "https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams")

#### Benefits

- Notifications from all the comments in Figma you have tagged and involved

- Illustrations
  <img width="1000" alt="figma set up" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/8ba28515-17a7-403f-a8db-37e4a8333ea0">
  <img width="1000" alt="figma chatops" src="https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/f0a5dc82-a73a-4208-ae59-c0a454f66058">

## Reference

- [What are the Benefits of ChatOps](https://www.ibm.com/cloud/blog/benefits-of-chatops "https://www.ibm.com/cloud/blog/benefits-of-chatops")
