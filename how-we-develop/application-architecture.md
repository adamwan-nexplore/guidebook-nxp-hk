# Application Architecture

## Purpose
- Split huge functions into pure functions & impure functions
- Define a clear boundary between ports & adapters
- Test components with a clear definition
- Provide a foundation on refactoring code the same way

### Mandatory
* filename = resource name
- messages.module.ts (plural, single class)
- messages.controller.ts (plural, single class)
- messages.service.ts (plural, single class)
- message.entity.ts (singlar, single class)

### Mandatory (II)
* filename = same to the class inside
- create-message-request.dto.ts (single class)
- create-messsage-response.dto.ts (single class)

### Complimentary (I)
* filename = resource name
- messages.helpers.ts (plural, multiple functions)
- messages.queries.ts (plural, multiple functions)
- messages.repositories.ts (plural, multiple functions)
- messages.components.ts (plural, multiple functions)
- messages.enums.ts (plural, multiple enums)
- messages.constants.ts (plural, multiple constants)

### Complimentary (II)
* filename = same to the name inside
- default-decimal-format.constant.ts (one constant, filename = constant name)
- get-to-know-who.helper.ts (one function, filename = name of function name)
- langguage-switches.component.ts (one function, filename = name of function name)
- subjects.enum.ts (one enum, filename = enum name)

# When to have a new...

## Controller
- Manipulate ONLY ONE resource
- Create a new one if there are some additional requirements
    - specific access right
    - specific checking
- No of functions = No of routes

## Service
- Ideal case, one controller of `resource A`, one service of `resource A`
- No of functions IN that service = No of functions IN that controller

## Helper
- Contain multiple pure functions
- Can be tested without any mocks

## Component
- Is an extension to certain service
- Simplify the logic in service
