# Lean Software Development <!-- omit in toc -->

**Table of Contents**

- [1. In short](#1-in-short)
- [2. What is WASTE](#2-what-is-waste)
- [3. Lean principles](#3-lean-principles)
- [4. Typical waste in software development](#4-typical-waste-in-software-development)
- [5. Practices (some are grouped into SCRUM)](#5-practices-some-are-grouped-into-scrum)
- [6. Opinion \& Clarification](#6-opinion--clarification)
- [7. Questions](#7-questions)
- [8. Reference](#8-reference)

## 1. In short

- Everything should be Just-in-Time
- Eliminate `waste` (Muda, in Japanese - 無駄)
- There are some ways to PRACTICE lean - however, Lean itself is more like philosophy
- A quick summary - go to [WIKI](https://en.wikipedia.org/wiki/Lean_software_development)

## 2. What is WASTE

- PURE waste - Anything cannot add value to the customers
- Necessary waste - Anything cannot add value to the customers BUT can make sure our work has VALUE

## 3. Lean principles

1. Eliminate waste
2. Amplify learning
3. Decide as late as possible
4. Deliver as fast as possible
5. Empower the team
6. Build integrity in
7. Optimize the whole

## 4. Typical waste in software development

1. Partially done work - Get things DONE
2. Extra features - Go with the verified ones
3. Relearning - Revisit and do small
4. Task switching - No multitasking
5. Waiting - Human waiting is a PURE waste
6. Handoffs - Let the actor find and solve the issues without extra people jump-ed in
7. Defects - Do better Quality Assurance, which is a necessary waste
8. Management activities - Be avoid to actively track the statuses

## 5. Practices (some are grouped into SCRUM)

1. Eliminate waste (see above)
2. Value stream mapping - Visualize the software development process
3. Set-based development - Instead of a definite POINT-based commitment, try to provide a range for better coordination
4. Pull systems - NO HARD schedule
5. Queueing theory
6. Motivation
7. Measurements - Local measurement and then local optimization
8. Test-driven development

## 6. Opinion & Clarification

- Human waiting is one of the most expensive waste. People practicing lean will try to KEEP people busy.
- CYCLE time has introduced. Slack time is needed to review and improve the process
- Measurements & Metrics are IMPORTANT indicators. Those expose:

  - overburden
  - scope change
  - low velocity
  - poor quality

  * Always review those at the end of each cycle

- Decide later DOES NOT mean doing MVP. The quality actually still keeps it (very) HIGH. We deliver FEATURES that customers WANT at this moment ONLY

## 7. Questions

- Just-In-Time to prevent `overproduction` is GOOD, how about `under-production`? Need to align
- Eliminate waste is the core concept on Lean, but who to execute?
- In practice a lot of work expects to be necessary waste. That is why we do it. How to figure out those are actually PURE waste?
- The stakeholder can delay the decision making ONLY IF the system is FLEXIBLE. Flexibility introduces complexity. Who and by What to decide?

## 8. Reference

- [Lean Software Development: An Agile Toolkit](https://www.oreilly.com/library/view/lean-software-development/0321150783 "https://www.oreilly.com/library/view/lean-software-development/0321150783")
