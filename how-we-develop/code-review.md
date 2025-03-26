# Code Review <!-- omit in toc -->

## The Guide

This is NOT a universal guide.

1. `[DB]` Transactions should ONLY be used when modifying data. Fetching data does not require a transaction.
2. `[DB]` Avoid including external actions within a transaction, such as:
   - Sending emails
   - Sending messages to a service bus
   - Making remote API calls
3. `[API]` API interface design is __CRUCIAL__. Always discuss with your teammates before starting work on the features.
4. `[API]` Input sanitization is __CRITICAL__. Improper handling of relational KEYS can lead to security vulnerabilities.
5. `[API/DB]` When using TypeORM for complex queries:
   - Provide raw queries and query plans in Pull Requests.
   - Avoid using `orWhere` unless absolutely necessary (it often requires brackets).
   - Minimize the use of brackets in queries.
   - Use `andWhere` or `orWhere` only if the conditions are optional.

      ```typescript
      const photosRepo = getRepository(Photo);
      let getPhotosQuery = photosRepo
         .createQueryBuilder('p')
         .where('p.projectId = :projectId', { projectId });

      // Correct use
      if (startDate) {
         getPhotosQuery = getPhotosQuery.andWhere('p.startDate >= :startDate', { startDate });
      }

      const photos = await getPhotosQuery.getMany();
      ```

6. `[API]` Avoid using `Promise.all` with arrays of unknown or dynamic length (e.g., arrays created with `map()`).
7. `[API]` For functions with many arguments, consider switching from `positional arguments` to `keyword arguments` for better readability and maintainability.

## Reference

- ["Look Good to Me"](https://www.manning.com/books/looks-good-to-me)
