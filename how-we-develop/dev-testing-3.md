# Developer Testing (3) <!-- omit in toc -->

Table of Contents

- [Generate instant feedback by tests](#generate-instant-feedback-by-tests)
- [Protectiveness](#protectiveness)
- [Deterministic](#deterministic)
- [Effectiveness](#effectiveness)
- [Readability](#readability)
- [Reference](#reference)

## Generate instant feedback by tests

- There are a lot of different types of tests
- To write developer tests:
- the tests should
  - provide instant feedback on any change
  - be simple
  - be straight forward
  - be handy without a lot of dependencies
- i.e. integration tests on developer tests often require real database setup

## Protectiveness

- **If the interfaces have changed, some test cases will break**
- Never test SOMETHING selectively - just test EVERYTHING

```typescript
interface Animal {
  id: number;
  name: string;
  weightInKg: number;
};

// old
function getAnimalNames(animals: Animal[]) {
  return animals.map(({ name }) => ({ name }) );
}

// new
function getAnimalData(animals: Animal[], largest = 2, hasWeight = true) {
  return animals
    .sort((a, b) => b.weightInKg - a.weightInKg)
    .map(({ name, weightInKg }) => ({ name, hasWeight ? weightInKg : undefined }))
    .splice(0, largest)
    ;
}

const ANIMALS: Animal[] = [
  {
    id: 1,
    name: 'Unicorn',
    weightInKg: 99,
  },
  {
    id: 2,
    name: 'Horse',
    weightInKg: 40,
  },
  {
    id: 3,
    name: 'Snake',
    weightInKg: 2,
  },
  {
    id: 4,
    name: 'Goose',
    weightInKg: 1,
  },
];

// good vs bad test
describe('#getAnimalData', () => {
  // Tests would pass even the output has changed
  describe('a bad test', () => {
    it('always works', () => {
      const result = getAnimalData(ANIMALS);

      expect(result).toBeDefined(); // 1: 👎 See below
      expect(result[0].name).toBe('Unicorn'); // 2: 👎 See below
      expect(result[1].name).toBe('Horse'); // 3: 👎 See below
    });
  });

  // Be resistant enough to flag ANY interface change and SOME data change
  describe('a good test', () => {
    it('breaks', () => {
      // 1: 👍 See below
      expect(getAnimalData(ANIMALS)).toEqual([ // 2: 👍 See below
        { name: 'Unicorn' },
        { name: 'Horse' },
        { name: 'Snake' },
        { name: 'Goose' },
      ]);
    });
  });
});
```

1. 👎 `toBeDefined` is useless. This case can be covered basically by any tests on output
2. 👎 Randomly select an attribute does not guarantee the program is correct
3. 👎 `Horse` can be found as wrong only if the previous line is fixed - this is an inefficient test

---

1. 👍 No need to explicitly assert something arbitrary
2. 👍 Cover the exit point ENTIRELY
3. 👍 Besides a single assertion, some libraries offer [soft assertion](https://playwright.dev/docs/test-assertions#soft-assertions).

## Deterministic

- Some SUTs are non-deterministic at nature.
- If just a small portion of the business logic, ignore it / test in a high level
- If affects most parts, DO not test it / refactor the code and take out the non-deterministic part

- You can still verify with automated test cases. Just do not cover it in developer tests

```typescript
// This function checks if the current time is between 6 PM and 9 PM
function isHappyHour() {
  const now = new Date().getHours();
  return now >= 18 && now < 21;
} // DO NOT TEST this

// refactor and upstream the getHour business logic
function isHappyHour(now: number) {
  return now >= 18 && now < 21;
}

describe('#isHappyHour', () => {
  it('works', () => {
    expect(isHappyHour(20)).toEqual(true);
  });
});
```

## Effectiveness

Test only your own code

- Ineffective tests do not improve any code coverage (e.g. [ABC Metric](https://en.wikipedia.org/wiki/ABC_Software_Metric))

```typescript
function getNotice(dateString: string) {
  return `Now is ${Date.parse(dateString)} second`;
}

describe('#getNotice', () => {
  // 👎 The parser is implemented natively
  describe('normal test', () => {
    it('is a standard test', () => {
      expect(getNotice('2019-01-01')).toEqual('Now is 1546300800000 second');
    });
  });

  describe('bad tests', () => {
    it('overkills 1', () => { // 👎 Will not improve the code coverage
      expect(getNotice('2019-01-01T00:00:00.000Z')).toEqual('Now is 1546300800000 second');
    });

    it('overkills 2', () => { // 👎 Will not improve the code coverage
      expect(getNotice('2019-01-01T00:00:00.000+00:00')).toEqual('Now is 1546300800000 second');
    });
  });
});
```

```typescript
interface Animal {
  id: number;
  name: string;
  weightInKg: number;
};

function getAnimalNames(animals: Animal[]) {
  return animals.map(({ name }) => ({ name }) );
}

// bad test
describe('#getAnimalData', () => {
  describe('a bad test', () => {
    it('returns an empty array', () => {
      const result = getAnimalData([]);
      expect(result).toEqual([]); // 👎 Cannot test the new array with name as key
    });
  });
});
```

## Readability

- Apply common test patterns
  - Arrange Act Assert (AAA)
  - USE
- Only share **application set up** across tests on hooks. Never share **test set up** on hooks. Consider factory functions
- To keep tests clean, extract the business logic  into functions

## Reference

- [Developer Testing](https://developertesting.rocks "https://developertesting.rocks")
- [Development Testing](https://en.wikipedia.org/wiki/Development_testing "https://en.wikipedia.org/wiki/Development_testing")
