# DevOps

## Definition

### Simple Definition

- Dev + Ops = DevOps

### Old School Definition

- DevOps is the practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support. - quoted from [the agile admin](https://theagileadmin.com/what-is-devops)

### Methodology - The Three Ways

- Flow
- Feedback
- Experimentation and Learning

## Ideal VS Reality

- (Ideally) SOME IT operators need to code and need to set up different tools before the products release
- (Ideally) SOME developers need to involve in operations

- (In Reality) Some Engineers switch their duties from Application Development to Operational Excellence with automation​

DevOps = Automation through (Infrastructure as Code + ChatOps + APM)

## The Three ways

### Flow

- System thinking

- Know the process / steps to deliver value to your client ([value stream](https://en.wikipedia.org/wiki/Value_stream))
- Name them and map them to stages ([value stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping))
- Reduce lead time to client
- Embrace necessary waste / focus on unnecessary overhead 
  * Divide each task to be minimal enough to allow FAST flow
  * Visualize flow so that everyone knows the pace

### Feedback

- Amplify Feedback Loops

#### System Generated

- Automated Testing (with Unit Tests / Integration Tests / End-to-End Tests)
- CI Build – Across Different Env
- Data Migration Test
- Error Alert - APM

** Ways to improve - automate, standardize, specify, FAST

#### Human Generated
- Code Review
- Usability Testing

** Ways to improve - promote a standard, practice, notify, communicate

### Experimentation and Learning

- Culture of Continual Experimentation and Learning

### Culture of Continual Experimentation
- Identify and Understand Risk before the experiments
- Trust and experiment
- Reduce risk to experiment

#### Learning
- Seek for good resources and Share
- Trust and Share
- Embrace failure and Share

## 4 Domains (Roles) on DevOps

- Site Reliability
  - (Passive) Set up metrics and alerts for system monitoring
  - (Active) Simulate extreme conditions to find issues in advance / promote system evolutions
  - Prometheus / Grafana / Loki
  - Choas Engineering
- Platform Engineering
  - integrate and develop tools to enable feedbacks
  - CI / CD
  - ChatOps
- Cloud Engineering
  - Cloud Native (Azure, AWS, GCP)
  - Infrastructure as Code
  - Zero Trust Architecture
  - etc...
- Process Governance
  - Define the workflows, processes and standards of development and operations

## Side Note

- The CALMS (Culture, Automation, Lean, Measurement, Sharing) framework will be another approach to set up the DevOps Culture. 

## Reference
- [The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations, 2nd Edition](https://www.goodreads.com/book/show/26083308-the-devops-handbook)
- [The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win](https://www.goodreads.com/book/show/17255186-the-phoenix-project)
- [The Unicorn Project](https://www.goodreads.com/book/show/44333183-the-unicorn-project)
- [What is DevOps?](https://resources.github.com/devops)
- [Site Reliability Engineering: How Google Runs Production Systems](https://www.goodreads.com/book/show/27968891-site-reliability-engineering)
- [The Lean Startup](https://theleanstartup.com)
- [GutLab and the three ways](https://about.gitlab.com/blog/2022/06/15/gitlab-and-the-three-ways-of-devops)
