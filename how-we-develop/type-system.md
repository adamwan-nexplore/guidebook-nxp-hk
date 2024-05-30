# Type System <!-- omit in toc -->

**Table of Contents**

- [Type Systems](#type-systems)
- [Specify the return type when](#specify-the-return-type-when)
- [When to bypass typing](#when-to-bypass-typing)
- [Tips](#tips)
- [Reference](#reference)

## Type Systems

- Structural Typing
- Nominal Typing
- Duck Typing

## Specify the return type when

- Write a library
- Have more than one `return`
- Be very slow on TS compilation level
- Expose a OpenAPI response with recursive nature
- Check the video [here](https://www.totaltypescript.com/tips/dont-use-return-types-unless) by Matt Pocock

## When to bypass typing

1. the original type is `unknown`
   1. it is very `complex`
   2. you are 100% about the structure

2. the input of test cases and 
   1. it is very complex
   2. the other attributes are `irrelevant` to the output

## Tips

1. Be permissive to use `unknown` + `type guard` rather than `any` / type assertion

2. Be avoid to use type assertion in production code (test files are fine)

3. Be avoid to use `Pick` or `Omit`. You might tempt to use class functions that might not work

4. Prefer generics rather than type annotation

5. Prefer type inference rather than type annotation, if not `any`

6. Narrow down the scope by type annotation, e.g. tuple, or value collections

7. Discriminated Union Types
   - make use of an additional property to match `struct`
   - `kind` is a popular attribute name

8. Align types in runtime by validation
   - Receive data from interfaces
   - Fetch data from remote call
   - Fetch data from database

9. Use Javascript Feature to differentiate objects / `structs`
    - `isInstanceof` for class naming
    - `typeOf` for primitive types

10. Use branded types to differentiate classes with same attributes (nominal types)

11. Prefer Pattern Matching rather than Index Signature

12. Be avoid to use `!`
 
## Reference

- [Typescript Cookbook](https://www.oreilly.com/library/view/typescript-cookbook/9781098136642)
- [Programming with Types](https://www.manning.com/books/programming-with-types)
