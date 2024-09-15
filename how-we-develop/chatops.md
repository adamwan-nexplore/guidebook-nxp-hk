# ChatOps <!-- omit in toc -->

Table of Contents

- [Objectives](#objectives)
- [Implementation](#implementation)
- [Tools](#tools)
  - [GitHub](#github)
  - [RSS](#rss)
  - [Jira Cloud](#jira-cloud)
  - [DataDog](#datadog)
  - [Figma](#figma)
- [Reference](#reference)

## Objectives

- Remove unnecessary disturbance to check emails regularly
- Centralize all the notifications and system activities in the same platform
- Provide a more real-time and interactive way to receive the messages

## Implementation

Stream most notifications to [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software")

## Tools

### GitHub

#### Channels <!-- omit in toc -->

- `[Backend] Deployment Notifications`
- `[Backend] Repo Notifications`
- `[Frontend] Deployment Notifications`
- `[Frontend] Repo Notifications`
- `[Mobile] Deployment Notifications`
- `[Mobile] Repo Notifications`
- `[Infrastructure] Repo Notifications`

> Please ask your engineering lead for the access to those channels

#### Setup <!-- omit in toc -->

- Go to the channels above
- Connect your GitHub Account through GitHub Bot

#### Benefits <!-- omit in toc -->

- `Tagged` Notifications triggered when someone tags you in GitHub
- Notifications of any kinds of changes / deployment has made to those repositories

> To set up a new channel from scratch, please check it [here](https://github.com/integrations/microsoft-teams "https://github.com/integrations/microsoft-teams")

---

### RSS

#### RSS - Channels <!-- omit in toc -->

- `[Backend] Platform Status Alert`

- Please ask your engineering lead for the access to those channels

#### RSS - Setup <!-- omit in toc -->

- N/A

#### RSS - Benefits <!-- omit in toc -->

- Service Availability updates of different platforms

> Check [Server Status](serverrss.md)

---

### Jira Cloud

#### Apps <!-- omit in toc -->

- Jira Cloud

#### Jira - Setup <!-- omit in toc -->

- Search `Jira Cloud`
- Sign in your Atlassian account
- Pin Jira Cloud in MS Teams

#### Jira - Benefits <!-- omit in toc -->

- Notifications from all the tickets in Jira you have tagged and involved

---

### DataDog

#### DataDog - Channels <!-- omit in toc -->

- channels in the team `DataDog Monitor`
  > Please ask your engineering lead for the access to those channels / Teams

- Check [here](https://docs.datadoghq.com/integrations/microsoft_teams "https://docs.datadoghq.com/integrations/microsoft_teams") for the integration guide

#### DataDog - Setup <!-- omit in toc -->

- N/A

#### DataDog - Benefits <!-- omit in toc -->

- Notifications from the running backend APIs in case there are any errors

---

### Figma

- Find and select the Figma app
- From the app's chat box, type Connect and send the message
- Follow the prompts to connect your Figma account
- Once connected, type `On` into the chat box and send the message to enable notifications.

#### Figma - Setup <!-- omit in toc -->

Check [here](https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams "https://help.figma.com/hc/en-us/articles/7405452518423-Figma-and-Microsoft-Teams")

#### Figma - Benefits <!-- omit in toc -->

- Notifications from all the comments in Figma you have tagged and involved

- Illustrations

![figma set up](https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/8ba28515-17a7-403f-a8db-37e4a8333ea0){width=600}

![figma ChatOps](https://github.com/adamwan-nexplore/guidebook-nxp-hk/assets/124669872/f0a5dc82-a73a-4208-ae59-c0a454f66058){width=600}

## Reference

- [What are the Benefits of ChatOps](https://www.ibm.com/cloud/blog/benefits-of-chatops "https://www.ibm.com/cloud/blog/benefits-of-chatops")
