# Type System

0. Structural Typing vs Nominal Typing vs Duck Typing

1. Specify the return type when

   - Write a library
   - Have more than one `return`
   - Be very slow on TS compilation level
   - Expose a OpenAPI response with recursive nature
   - Check the video [here](https://www.totaltypescript.com/tips/dont-use-return-types-unless) by Matt 

2. When to Type

- Be permissive to use `unknown` + `type guard` rather than `any` / type assertion
- Be avoid to use type assertion in production code (test files are fine)
- Be avoid to use `!`
- Be avoid to use `Pick` or `Omit`. You might tempt to use class functions that might not work
- Prefer generics rather than type annotation
- Prefer type inference rather than type annotation, if not `any`
- Narrow down the scope by type annotation, e.g. tuple, or value collections

3. Discriminated Union Types

- make use of an additional property to match `struct`
- `kind` is a popular attribute name

4. Protect compile level types by strict checking from external sourcing

- Receive data from interfaces
- Fetch data from remote call
- Fetch data from database

5. Use Javascript Feature to differentiate objects / `structs`

- `isInstanceof` for class naming
- `typeOf` for primitive types

6. Use branded types to differentiate classes with same attributes (nominal types)

7. Prefer Pattern Matching rather than Index Signature

# Reference

- [Typescript Cookbook](https://www.oreilly.com/library/view/typescript-cookbook/9781098136642)
- [Programming with Types](https://www.manning.com/books/programming-with-types)
