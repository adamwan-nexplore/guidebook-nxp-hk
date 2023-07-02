# Tacit Programming / Point Free Style
- Functional Light Javascript

```
A popular style of coding in the FP world aims to reduce some of the visual clutter by removing unnecessary parameter-argument mapping
```

- Point = Arguement
- Point Free = No arguements to use a function (Only one arguement but we consume through functional chain)


```
const sumOfValues = sum(
  values
    .filter(isEven)
    .map(divideByTwo)
    .map(incrementByThree)
)
```


```
### General functions
const isCertainMultiples = (value: number,  mod: number) => value % mod === 0;
const divideBy = (value: number, divider: number) => value / divider;
const increment = (value: number, incrementValue: number) => value + incrementValue;
```

```
### Currying and name it
const curriedIsCertainMultiples = R.curry(isCertainMultiples);
const curriedDivideBy = R.curry(divideBy);
const curriedIncrement = R.curry(increment);

const isEven = curriedIsCertainMultiples(2)
const divideByTwo = curriedDivideBy(2)
const incrementByThree = curriedIncrement(3)
```



- [Tacit Programming - Wiki](https://en.wikipedia.org/wiki/Tacit_programming)
- [Tacit Programming - APL Wiki](https://aplwiki.com/wiki/Tacit_programming)
- [What are advantages and disadvantages of "point free" style in functional programming?](https://stackoverflow.com/questions/5671271/what-are-advantages-and-disadvantages-of-point-free-style-in-functional-progra)
