# ChatOps

## Objectives

- Remove unnecessary disturbance to check emails regularly
- Centralize all the notifications and system activities in the same platform
- Provide a more real-time and interactive way to receive the messages

-------

## Implementation

- We will stream most notifications to [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software)

-------

## Tools

### 1. GitHub
#### Channels 
- `[Backend] Repo Notifications`
- `[Frontend] Repo Notifications`

```
Please ask your engineering lead for the access to those channels
```

#### Setup
- Go to `[Backend] Repo Notifications` / `[Frontend] Repo Notifications`
- Connect your GitHub Account through GitHub Bot

#### Benefits
- `Tagged` Notifications when someone tags you in GitHub
- Notifications of any kinds of changes / deployment has made to those repositories

To set up a new channel from scratch, please check it [here](https://github.com/integrations/microsoft-teams)

-------

### 2. RSS
#### Channels
- `[Backend] Platform Status Alert`

* Please ask your engineering lead for the access to those channels

#### Setup
- N/A

#### Benefits
- Service Availability updates of different platforms we use


- This is the list of [Server Status](serverrss.md)

-------
### 3. Jira Cloud
####  Channels
- Jira Cloud

#### Setup
- Go to `Jira Cloud`
- Sign in your Atlassian account
- Pin Jira Cloud in MS Teams
    
#### Benefits
- Notifications from all the tickets in Jira you have tagged and involved

-------
### 4. DataDog
####  Channels
- channels in the team `DataDog Monitor`

```
Please ask your engineering lead for the access to those channels / Teams
```

#### Setup
- N/A
    
#### Benefits
- Notifications from the running backend APIs in case there are any errors


## Reference

- [What are the Benefits of ChatOps](https://www.ibm.com/cloud/blog/benefits-of-chatops)

