# Developer Testing (3) <!-- omit in toc -->

**Table of Contents**

- [The objective of writing test cases](#the-objective-of-writing-test-cases)

## Objectives

There are a lot of tests developer can write.
However, developer testing should give instant feedback on the change of SUT as much as possible.
Tests itself should be very simple and straight forward and handy enough without having a lot of dependency. (Usually with test database in integration tests, but that is all)

### Protectiveness

- If the interfaces have changed, the respective test cases break
- It is the MOST important
- In most cases, you should not selectively test SOMETHING. Just test EVERYTHING

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
function getAnimalData(animals: Animal[], largest = 2, weights = true) {
  return animals
    .sort((a, b) => b.weightInKg - a.weightInKg)
    .map(({ name, weightInKg }) => ({ name, weights ? weightInKg : undefined }))
    .splice(0, 2)
    ;
}

// bad tests
const animals: Animal[] = [
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
```



1. Useless, 99% can be covered by other assertions
2. Why only select some inputs?
3. If the first one and second one both fail, need to wait until the first one has fixed

```typescript
describe('#getAnimalData', () => {
  // Tests would pass even you change the logic
  describe('bad test', () => {
    it('always works', () => {
      const result = getAnimalData(animals);

      expect(result).toBeDefined();
      expect(result[0].name).toBe('Unicorn');
      expect(result[1].name).toBe('Horse');
    });
  });
```


- No need to explicitly assert the change of length
- Cover the exit point ENTIRELY
- Instead of a single assertion, some libraries offer [soft assertion](https://playwright.dev/docs/test-assertions#soft-assertions). It could be a good alternative.

```typescript
  // Resistent enough to flag ANY interface change and SOME logical change
  describe('good test', () => {
    it('breaks', () => {ood alternative.
      expect(getAnimalData(animals)).toEqual([
        { name: 'Unicorn' }, // flagged because of the interface change
        { name: 'Horse' },
        { name: 'Snake' }, // flagged because of the logical change
        { name: 'Goose' },
      ]);
    });
  });
});
```

### Effectiveness

- Test only the code you write, not by others
- To find out those redundant tests, those often will not improve any code coverage metrics

```typescript
function getNotice(dateString: string) {
  return `Now is ${Date.parse(dateString)} second`;
}

describe('#getNotice', () => {
  // The parser is implemented natively
  describe('bad test', () => {
    it('overkills 1', () => {
      expect(getNotice('2019-01-01')).toEqual('Now is 1546300800000 second');
    });

    it('overkills 2', () => {
      expect(getNotice('2019-01-01T00:00:00.000Z')).toEqual('Now is 1546300800000 second');
    });

    it('overkills 3', () => {
      expect(getNotice('2019-01-01T00:00:00.000+00:00')).toEqual('Now is 1546300800000 second');
    });
  });
});
```

### Readability

- Apply common test patterns like AAA and / or USE
- Most the variables should be found within the test scope
- Hide the set up if it is very complicated by extracting to functions

