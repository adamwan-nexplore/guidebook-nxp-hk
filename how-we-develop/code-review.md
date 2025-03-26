# Code Review <!-- omit in toc -->

This is NOT a universal guide

1. `[DB]`Transaction should ONLY apply when modifying data. Fetching data is not necessary.
2. `[DB]`Do not include EMAIL actions in transaction
3. `[API]` API interface is IMPORTANT. Always discuss with your teammates before you start
4. `[API]` Input sanitization is VERY IMPORTANT. Relational KEYS can be a security issue for not handling properly
5. `[API/DB]` TypeORM for complicated queries

   - provide raw query
   - orWhere should be avoided (you need bracket sometime)
   - Bracket should be avoided
   - andWhere / orWhere use only if you have some conditions to work with

6. `[API]` Promise.all should NOT be used with un-determinate array (e.g. `map()`)
7. `[API]` Functions with too many arguments - consider changing from `positional arguments` to `keyword arguments`

# Reference

- ["Look Good to Me"](https://www.manning.com/books/looks-good-to-me)
