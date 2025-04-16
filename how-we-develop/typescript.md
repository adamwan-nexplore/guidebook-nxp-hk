# Typescript <!-- omit in toc -->

## Use object destruction

```typescript
const values = param.values;
const key = param.attribute.key;
const combinedExtras = param.combinedExtras;
const rounding = combinedExtras.rounding;
const multipleOf = combinedExtras.multipleOf;
```

> (Might be) Better

```typescript
const {
  values,
  attribute: { key },
  combinedExtras: { rounding, multipleOf, formula },
} = param;
```

> Discussion: [The advantage of the Destructuring assignment in JavaScript/React](https://medium.com/@valentinemaillard1/the-advantage-of-the-destructuring-assignment-in-javascript-react-d4868ad42871 "https://medium.com/@valentinemaillard1/the-advantage-of-the-destructuring-assignment-in-javascript-react-d4868ad42871")

## Be avoid to mutate objects

```typescript
delete group.id;
delete group.createTime;
delete group.modifyTime;
delete group.children;
return group;
```

> Better

```typescript
const { id, createTime, modifyTime, children, ...newGroup } = group;
return newGroup;
```

- Or

```typescript
return {
  ...group,
  id: undefined,
  createTime: undefined,
  modifyTime: undefined,
  children: undefined,
};
```

## Do not use anonymous function if it is very lengthy

Treat the name of the function as a little comment

```typescript
reversedData.reduce((acc: string[], currentVal) => {
  if (!acc.includes(currentVal.author.id)) {
    acc.push(currentVal.author.id);
  }
  if (!acc.includes(currentVal.author2.id)) {
    acc.push(currentVal.author2.id);
  }
  if (!acc.includes(currentVal.author3.id)) {
    acc.push(currentVal.author3.id);
  }
  return acc;
}, []);
```

> Better

```typescript
reversedData.reduce(function mapAuthorId(acc: string[], currentVal) {
  if (!acc.includes(currentVal.author.id)) {
    acc.push(currentVal.author.id);
  }
  if (!acc.includes(currentVal.author2.id)) {
    acc.push(currentVal.author2.id);
  }
  if (!acc.includes(currentVal.author3.id)) {
    acc.push(currentVal.author3.id);
  }
  return acc;
}, []);
```

## Specify the types (especially DB entity)

```typescript
return await this.connection.transaction(async (manager) => {
  const dbRelations = await manager.find(ArtifactRelation, {
    where: {
      from: { id: artifactId },
      isManualCreated: false,
    },
    relations: {
      from: true,
      to: true,
    },
  });
```

> Better

```typescript
return await this.connection.transaction(async (manager: EntityManager) => {
  const repo = manager.getRepository(ArtifactRelation);
  const dbRelations = await repo.find({
    where: {
      from: { id: artifactId },
      isManualCreated: false,
    },
    relations: {
      from: true,
      to: true,
    },
  });
```

## Iterate across array

Iterate using `map`, `reduce` and `filter`:

- while
  - `map` returns `array`
  - `reduce` returns `object` / `associative array`
  - `filter` removes item

> Do you know what is `transducer`?

## Return something

Return something meaningful when writing a function

## Promise.all

- Be avoid to use `Promise.all` with arrays of unknown or dynamic length (e.g., arrays created with `map()`). Consider a modified version like [this](https://stackoverflow.com/questions/37213316/execute-batch-of-promises-in-series-once-promise-all-is-done-go-to-the-next-bat)

```typescript
// can use up all the external resources
function runTogether(arr: number[]) {
  return Promise.all(arr.map(executeSomething));
}
```

## Positional Arguments vs Keyword Arguments

```typescript
// same type, can use wrongly
function sum(a: number, b: number, c: number, d: number, e: number) {
  return a + b + c + d + e;
}

// better
function sum({ a, b, c, d, e}: {a: number, b: number, c: number, d: number, e: number}) {
  return a + b + c + d + e;
}
```

## More

- [VS Code Tips and Tricks for TypeScript Wizards](https://www.youtube.com/watch?v=HalycM9tSNM)
