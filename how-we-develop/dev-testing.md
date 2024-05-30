# Developer Testing (1) <!-- omit in toc -->

**Table of Contents**

- [Some important terms](#some-important-terms)
- [The Ultimate Goal](#the-ultimate-goal)
- [Rephrase the statement](#rephrase-the-statement)
- [13 Tips to write Unit Tests in Jest](#13-tips-to-write-unit-tests-in-jest)
- [Reference](#reference)

Before it starts, can you tell

- Why do you test your code?
- What is a unit in unit testing?
- Why unit tests rather than other tests?
- What do you test?
- What are the tricks using Jest to write unit tests?
- What are testable codes?

## Some important terms

**SUT** - System Under Test  
**Unit test** - Usually we verify the `output` of a `function` (unit). We might test against an object, but it is not common  
**Entry Point** - The way we `use` the unit to work. Usually, it refers to the input parameters of a function  
**Exit Point(s)** - The effect / output after the input was applied to the SUT

## The Ultimate Goal

We should `write more pure functions`. It will help making our codes to be more testable

a. pure functions

> return value / error (the easiest way to observe the change)

b. impure functions

> change of states (need to check the implementation to find out the state)

> by stricter scoping

> call third party dependencies (very hard to observe)

## Rephrase the statement

> We should reduce the number of impure functions

> We should group those impure functions together, or at least in a managed way

> Do not dream of eliminate those entirely.  
> We need to store the data in our disk by the use of impure functions

## 13 Tips to write Unit Tests in Jest

1. Should test one exit point per test case

2. Definition of Unit Test
   - fast
   - no extra setup

3. What we prefer to have test case files - the filename ending with `.spec.ts`
   - Plugin Recommended for VSCode: `Jest Runner`
   - Can run the spec files immediately when you save the `.spec.ts` files

4. Learn what is [snapshot testing](https://jestjs.io/docs/snapshot-testing "https://jestjs.io/docs/snapshot-testing") - Try `toMatchInlineSnapshot()` (similar one is `toMatchSnapshot()`)

5. Arrange Act Assert

6. U.S.E. the way to describe the test
   - Describing the `unit` (filename + function name)
   - `Situation` (the input you are going for)
   - `Expectation` (expected observed change to be)

```typescript
// describe file
describe('@password.ts', () => {

  // describe function
  describe('#verifyPassword', () => {

    // describe condition
    describe('given a failing rule', () => {

      // mark expected output ONLY
      it('returns errors', () => {
        const fakeRule = input => ({ passed: false, reason: ‘fake reason’ });
        const [firstError] = verifyPassword('any value', [fakeRule]);
        expect(firstError).toContain('fake reason');
      });
    });
  });
});
```

7. Make use of Arbitrary Matcher (Try `jest.any(Date)`)

```typescript
describe("#funcA", () => {
  it("returns the correct structure", () => {
    expect(funcA("abc")).toEqual({
      abc: "abc",
      id: "id",
      createdOn: "2023-01-31", // keeping changing
    });
  });
});
```

8. scrolling fatigue
   - With the use of `beforeEach` function, reader needs to scroll up a lot to understand the set up.
   To be more intuitively, consider creating a setup function with a proper name for readability.

9. how to test a throwing error

```typescript
test("verify, with no rules, throws exception", () => {
  const verifier = makeVerifier();
  expect(() => verifier.verify("any input")).toThrowError(
    /no rules configured/,
  );
});
```

10. [Nock Recording](https://github.com/nock/nock#recording "https://github.com/nock/nock#recording") (Set up the real integration to call the APIs, and then capture the response for mock testing)

11. How to mock data (OOP vs Functional)

    a. Functional approaches

    - Function as Parameter
    - Factory Functions (a.k.a Higher Order Functions)
    - Constructor Functions

    b. Object Oriented Approaches

    - Class Constructor Injection
    - Object as Parameter (a.k.a ‘duck typing’)
    - Common Interface as Parameter (for this we’ll use TypeScript)”

12. Pay extra attention to the terms like `mocks`, `stubs`, `fake` and `double`. There are several different definitions.

13. Use `toEqual` rather than `toBe`. Check [here](https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca "https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca").

## Reference

- [The Art of Unit Testing](https://www.manning.com/books/the-art-of-unit-testing-third-edition "https://www.manning.com/books/the-art-of-unit-testing-third-edition")
- [The Art of Unit Testing (GOTO 2021)](https://www.youtube.com/watch?v=6ndAWzc2F-I "https://www.youtube.com/watch?v=6ndAWzc2F-I")
- [XUnit Patterns.com](http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html "http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html")
- [Better Spec](https://www.betterspecs.org "https://www.betterspecs.org")
