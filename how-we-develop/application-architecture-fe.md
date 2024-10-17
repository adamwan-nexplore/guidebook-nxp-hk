# Application Architecture on Frontend <!-- omit in toc -->

Table of Contents

- [Overview](#overview)
- [Purpose](#purpose)
- [Constraints](#constraints)
- [Recommendations](#recommendations)
- [Types of Folders](#types-of-folders)
  - [Core - UI](#core---ui)
  - [Core - functions](#core---functions)
  - [Complimentary](#complimentary)
- [Design Principles](#design-principles)
- [Checklist](#checklist)
- [Reference](#reference)

## Overview

## Purpose

- Establish an association between `URL` and `page`
- Do not overload `page` with **excessive** states, props and components
- Define common folder types that `can split the components` and refactor the logics the same way

## Constraints

- Be avoid to cross import constants, enums, types and interfaces

## Recommendations

- Always write unit tests for helper files
- Consider write widget tests for component files

## Types of Folders

### Core - UI

- page
  - `UI` imported to router
  - single `component`
  - extensions: `tsx`
- components
  - `UI` not imported to router
  - single `component`
  - extensions: `tsx`

### Core - functions

- hooks
  - single custom hook `function`
  - might import logic from services
  - extensions: `ts`
- helpers
  - single / multiple pure `functions`
  - extensions: `ts`
- services
  - single / multiple `functions`
  - send requests to APIs
  - extensions: `ts`

### Complimentary

- utils
  - contains random calls
  - remote calls
  - extensions: `ts`
- interfaces
  - single / multiple `interfaces`
  - extensions: `ts`
- types
  - single / multiple `types`
  - extensions: `ts`
- constants
  - single / multiple `constants`
  - extensions: `ts`
- interfaces
  - single / multiple `interfaces`
  - extensions: `ts`
- enums
  - single / multiple `enums`
  - extensions: `ts`

<!-- ## When to have a new -->

## Design Principles

- Functional Paradigms
- Hexagonal Architecture

## Checklist

- [ ] Are `Business Logics` resolved as pure functions?
- [ ] Can logic extract to be some separate functions?
- [ ] Do states bind to relevant components ONLY?
- [ ] Do components extract as children if under a complicated layout?

## Reference
