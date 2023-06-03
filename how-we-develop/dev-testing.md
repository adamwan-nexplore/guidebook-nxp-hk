#  Developer Testing (1)

Before it starts, can you tell

- Why do you test your code?
- What is a unit in unit testing?
- Why unit tests rather than other tests?
- What do you test?
- What are the tricks using Jest to write unit tests?
- What are testable codes?

---
## Some important terms 

SUT - System Under Test

Unit test - Usually we verify the `output` of a `function` (unit). We might test against an object, but it is not common

Entry Point - The way we `use` the unit to work. Usually, it refers to the input parameters of a function

Exit Point(s) - The effect / output after the input was applied to the SUT

---
```
We should `write more pure functions`. It will help making our codes to be more testable
```

a. pure functions

    -> return value / error (the easiest way to observe the change)

b. impure functions

    -> change of states (need to check the implementation to find out the state) -> by stricter scoping

    -> call third party dependencies (very hard to observe)

```
## Rephrase the statement 

We should reduce the number of impure functions
We should group those impure functions together, or at least in a managed way
Do not dream of eliminate those entirely. We need to store the data in our disk by the use of impure functions
```
---

## 13 Tips to write Unit Tests in Jest

1. Should test one exit point per test case

2. if the tests are not fast enough or those parts require extra setup, those should not be regarded as unit tests

3. What we prefer to have test case files - the filename ending with `.spec.ts`
   
    (Plugin Recommended for VSCode: `Jest Runner` - it will run the spec files immediately when you save the `.spec.ts` file)

4. Learn what is [snapshot testing](https://jestjs.io/docs/snapshot-testing) - Try `toMatchInlineSnapshot()` (similar one is `toMatchSnapshot()`)

5. Arrange Act Assert

6. U.S.E. the way to describe the test

    - Describing the `unit` (filename + function name)

    - `Situation` (the input you are going for)

    - `Expectation` (expected observed change to be)

    ```
    // describe file
    describe('@password.ts', () => {

      // describe function
      describe('#verifyPassword', () => {

        // describe condition
        describe('given a failing rule', () => {
    
          // mark expected output ONLY
          it('returns errors', () => {
            const fakeRule = input => ({ passed: false, reason: ‘fake reason’ });
            const errors = verifyPassword('any value', [fakeRule]);
            expect(errors[0]).toContain('fake reason');
          });
        });
      });
    });
    ```

7. Make use of Arbitrary Matcher (Try `jest.any(Date)`)

    ```
    describe('#funcA', () => {
        it('returns the correct structure', () => {
            expect(funcA('abc')).expect({
               abc: 'abc',
               id: 'id',
               createdOn: '2023-01-31' // keeping changing
            });
        });
    });
    ```

8. scroll fatigue
   
   Using `beforeEach` function, reader needs to scroll up a lot to understand the set up.
   To be more intuitively, consider creating a setup function with a proper name for readability.

9. how to test a throwing error
    ```
    test('verify, with no rules, throws exception', () => {
      const verifier = makeVerifier();
      expect(() => verifier
                  .verify('any input'))
                  .toThrowError(/no rules configured/);
    });
    ```

10. [Nock Recording](https://github.com/nock/nock#recording) (Setting the real secret to run aginst the apis, and then capture the response for mock testing)

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

13. Use `toEqual` rather than `toBe`. Check [here](https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca).

## Reference
- [The Art of Unit Testing - 3rd Edition (with examples in JavaScript)](https://www.manning.com/books/the-art-of-unit-testing-third-edition)
- [Xunit Patterns.com](http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html)
- [The Art of Unit Testing • Roy Osherove & Dave Farley • GOTO 2021](https://www.youtube.com/watch?v=6ndAWzc2F-I)
- [Better Spec](https://www.betterspecs.org)

