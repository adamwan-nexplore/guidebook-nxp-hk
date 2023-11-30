# Typescript

1. Use object destruction
    ```typescript
    const values = param.values;
    const key = param.attribute.key;
    const combinedExtras = param.combinedExtras;
    const rounding = combinedExtras.rounding;
    const multipleOf = combinedExtras.multipleOf;
    ```

    （Might be) Better
    ```typescript
    const {
      values,
      attribute: {
        key,
      },
      combinedExtras: {
        rounding,
        multipleOf,
        formula,
      }
    } = param;
    ```
 
   Discussion: [The advantage of the Destructuring assignment in JavaScript/React
](https://medium.com/@valentinemaillard1/the-advantage-of-the-destructuring-assignment-in-javascript-react-d4868ad42871 "https://medium.com/@valentinemaillard1/the-advantage-of-the-destructuring-assignment-in-javascript-react-d4868ad42871")

2. Avoid to mutate objects
    ```typescript
    delete group.id;
    delete group.createTime;
    delete group.modifyTime;
    delete group.children;
    return group;
    ```

    Better
    ```typescript
    const { id, createTime, modifyTime, children, ...newGroup } = group;
    return newGroup;
    ```

    Or
    ```typescript
    return {
      ...group,
      id: undefined,
      createTime: undefined,
      modifyTime: undefined,
      children: undefined,
    };
    ```

3. Do not use anonymous function if it is very lengthy.
Treat the name of the function as a little comment
    ```typescript
    reversedData.reduce(
        (acc: string[], curr) => {
          if (!acc.includes(curr.author.id)) {
            acc.push(curr.author.id);
          }
          if (!acc.includes(curr.author2.id)) {
            acc.push(curr.author2.id);
          }
          if (!acc.includes(curr.author3.id)) {
            acc.push(curr.author3.id);
          }
          return acc;
        },
        []
    );
    ```

    Better
    ```typescript
    reversedData.reduce(
        function mapAuthorId(acc: string[], curr) {
          if (!acc.includes(curr.author.id)) {
            acc.push(curr.author.id);
          }
          if (!acc.includes(curr.author2.id)) {
            acc.push(curr.author2.id);
          }
          if (!acc.includes(curr.author3.id)) {
            acc.push(curr.author3.id);
          }
          return acc;
        },
        []
      );
    ```

4. Specify the types (especially DB entity)
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

    Better
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

5. Iterate using `map`, `reduce` and `filter`:
  
    while
    - `map` returns `array`
    - `reduce` returns `object` / `associative array`
    - `filter` removes item

    Do you know what is `transducer`?

6. Return something meaningful when writing a function
