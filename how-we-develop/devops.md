# DevOps <!-- omit in toc -->

Table of Contents

- [Definition](#definition)
  - [Simple Definition](#simple-definition)
  - [Old School Definition](#old-school-definition)
  - [Methodology - The Three Ways](#methodology---the-three-ways)
- [Ideal VS Reality](#ideal-vs-reality)
- [The Three ways](#the-three-ways)
  - [Flow](#flow)
  - [Feedback](#feedback)
    - [System Generated](#system-generated)
    - [Human Generated](#human-generated)
  - [Experimentation and Learning](#experimentation-and-learning)
    - [Culture of Continual Experimentation](#culture-of-continual-experimentation)
    - [Learning](#learning)
- [FOUR Domains (Roles) on DevOps](#four-domains-roles-on-devops)
- [Side Note](#side-note)
- [Metrics](#metrics)
- [Reference](#reference)

## Definition

### Simple Definition

Dev + Ops = DevOps

### Old School Definition

DevOps is the practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support. - quoted from [the agile admin](https://theagileadmin.com/what-is-devops)

### Methodology - The Three Ways

- Flow
- Feedback
- Experimentation and Learning

## Ideal VS Reality

DevOps = Automation through (Infrastructure as Code + ChatOps + APM)

- (Ideally) SOME IT operators need to code and need to set up different tools before the products release
- (Ideally) SOME developers need to involve in operations

- (In Reality) Some developers switch their duties from Application Development to Operational Excellence with automation

## The Three ways

### Flow

- System thinking

- Know the process / steps to deliver values to your clients ([value stream](https://en.wikipedia.org/wiki/Value_stream))
- Name the steps and map those to stages ([value stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping))
- Reduce lead time to clients
- Embrace necessary waste / focus on reducing unnecessary overhead
  - Divide each task to be minimal enough to allow FAST flow
  - Visualize flow so that everyone knows the pace

### Feedback

- Amplify Feedback Loops

#### System Generated

- Automated Testing (with Unit Tests / Integration Tests / End-to-End Tests)
- CI Build - Across Different Env
- Data Migration Test
- Error Alert - APM

**Ways to improve** - automate, standardize, specify, FAST

#### Human Generated

- Code Review
- Usability Testing

**Ways to improve** - promote a standard, practice, notify, communicate

### Experimentation and Learning

- Culture of Continual Experimentation and Learning

#### Culture of Continual Experimentation

- Identify and Understand Risk before the experiments
- Trust and experiment
- Reduce risk to experiment

#### Learning

- Seek for good resources and Share
- Trust and Share
- Embrace failure and Share

## FOUR Domains (Roles) on DevOps

- Site Reliability
  - (Passive) Set up metrics and alerts for system monitoring
  - (Active) Simulate extreme conditions to find issues in advance / promote system evolutions
  - Prometheus / Grafana / Loki
  - Chaos Engineering
- Platform Engineering
  - integrate and develop tools to enable feedbacks
  - CI / CD
  - ChatOps
  - HelmChart / Kustomize (Application Orchestration)
- Cloud Engineering
  - Cloud Native (Azure, AWS, GCP)
  - Containerisation (Docker)
  - Pulumni / CDK / Terraform (Infrastructure Provisioning)
  - Infrastructure as Code
  - Zero Trust Architecture
  - etc...
- Process Governance
  - Define the workflows, processes and standards of development and operations

## Side Note

The CALMS (Culture, Automation, Lean, Measurement, Sharing) framework will be another approach to set up the DevOps Culture.

## Metrics

[DORA - DevOps Research and Assessment](https://dora.dev "https://dora.dev") is one of the favourite tools to illustrate the different aspect of software delivery keys

[Github ESSP - GitHub's Engineering System Success Playbook](https://resources.github.com/engineering-system-success-playbook "https://resources.github.com/engineering-system-success-playbook") is a practical framework with Github to maintain a good software delivery process


## Reference

- [The DevOps Handbook, 2nd Edition](https://itrevolution.com/product/the-devops-handbook-second-edition "https://itrevolution.com/product/the-devops-handbook-second-edition")
- [The Phoenix Project](https://itrevolution.com/product/the-phoenix-project "hthttps://itrevolution.com/product/the-phoenix-project")
- [The Unicorn Project](https://itrevolution.com/product/the-unicorn-project "https://itrevolution.com/product/the-unicorn-project")
- [What is DevOps?](https://resources.github.com/devops "https://resources.github.com/devops")
- [Site Reliability Engineering](https://www.oreilly.com/library/view/site-reliability-engineering "https://www.oreilly.com/library/view/site-reliability-engineering")
- [The Lean Startup](https://theleanstartup.com "https://theleanstartup.com")
- [GutLab and the three ways](https://about.gitlab.com/blog/2022/06/15/gitlab-and-the-three-ways-of-devops "https://about.gitlab.com/blog/2022/06/15/gitlab-and-the-three-ways-of-devops")
