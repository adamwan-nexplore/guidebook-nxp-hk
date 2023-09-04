# Database Design

# General Advice

- `createdAt` should present in each table
- A primary key should present in each table
- `updatedAt` / `createdBy` can be useful sometime
- Avoid unnecessary `null`s, set default value if possible
    - Boolean column can be non-nullable, with an aid of default value `true` or `false`
    - Free text column can often set with a default empty string
- For performance concern, store the key/id of the module
    - eliminate the joins to the very upper level tables
- High precision data types (like numeric) often returns as a `string`, make sure the type in the programming language does use the appropriate casting

# Performance
- Create an index separately to foreign key columns
- Check Performance Tips from [PG Documentations](https://www.postgresql.org/docs/16/performance-tips.html)
- B-Tree Index can help both sorting & range search
- To index text for prefix search, use pattern operator
  ```
  CREATE INDEX ON customer.customers (name text_pattern_ops);
  ```

## Reference
- [SQL Antipatterns, Volume 1](https://pragprog.com/titles/bksap1/sql-antipatterns-volume-1)
- [SQL Performance Explained](https://sql-performance-explained.com/)
- [Modern SQL](https://modern-sql.com/)
- [Use the Index, Luke](https://use-the-index-luke.com/)
