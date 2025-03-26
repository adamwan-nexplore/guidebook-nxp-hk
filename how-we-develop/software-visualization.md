# Software Visualization <!-- omit in toc -->

Table of Contents

- [Why diagramming?](#why-diagramming)
- [Before drawing a diagram, ask](#before-drawing-a-diagram-ask)
- [Some ideas](#some-ideas)
- [After a diagram is drawn, think about](#after-a-diagram-is-drawn-think-about)

## Why diagramming?

Provide a quick reference or even an index of a **COMPLEX** system in different aspect

- Can focus on ONE or a few specific aspects of the systems, WHILE documentations or source code always provide the full pictures
- Most people like to read diagrams before jumping into the lengthy documentation / source code

## Before drawing a diagram, ask

- (People) Who read the diagrams?
- (People) Who can help maintaining the diagrams?
- (Context) Technical vs Business?
- (Context) How much information?
- (Methodologies) What diagrams?
  - Context Diagrams
  - State Diagrams
  - Sequence Diagrams
  - Use Case Diagrams
  - Flow Charts

## Some ideas

Q. (People) Who read the diagrams?

A. Software Engineers

- can use more jargons to save drawing time
- can use more professional diagrams to illustrate some complex ideas

A. Business Representatives

- evaluate the business values of the systems
- provide insights how to deliver better business values

A. Product Experts

- understand the impact to introduce new features
- make sure that those processes do make sense in a digital set up

A. Domain Experts

- verify the systems with the real world activities
- explore the additional missing parts to boost the values

---

Q. (People) Who can help maintaining the diagrams?

A. Software Architects?

- System interactions

A. Software Engineers?

- Component implementations

A. Business Analysts?

- Business Processes / System - Real World mapping

---

Q. (Context) Technical vs Business?

A. Technical

- Data flow
- System flow
- Data relationship
- Components Diagrams

A. Business

- System flow
- Business Processes flow
- System-Business mapping

---

Q. (Context) How much information?

A. If a SINGLE and small component is VERY complex, focus on the aspect the components on MOST obvious part

A. In general, diagrams should focus on one OR a few aspects of the systems - it provides abstractions

- diagrams should never replace system specifications

---

Q. (Methodologies) What diagrams?

A. Context Diagrams
A. State Diagrams
A. Sequence Diagrams
A. Use Case Diagrams
A. Flow Charts

## After a diagram is drawn, think about

- (People) Who can help reviewing the diagrams?
- (Context) Can readers search the context?
- (Context) Check typos
- (Context) Avoid to have more than 50 nodes & associations
- (Context) Provide title if possible
- (Context) Provide comments in CODE if necessary (Diagram as code)
