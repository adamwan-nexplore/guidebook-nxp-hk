# Introduction to Query Performance

## on PostgreSQL

## 0. What will cover

- Purpose

  - OLTP (Online Transaction Processing)
    - store and query the transactions
  - ~~OLAP (Online Analytical Processing)~~
    - report data, for planning and management

- Vendors
  - Postgres
  - ~~MySQL~~
  - ~~OracleDB~~
  - ~~SQL Server~~

## 0.1 Good Performance

1. `Good Enough` Number of Concurrent Connections
2. No Always-Slow Queries
3. Minimal Randomly-Slow Queries

> It is IMPOSSIBLE to avoid Randomly-Slow Queries
>
> There are factors cannot be under full controlled
>
> - networking
> - connection pools
> - read-write bottlenecks from storage

## 0.2 Principles

1. Transactional queries should be FAST (<500ms)
2. Number of concurrently queries in the same sessions should be less than 5
3. Queries inside a transaction should be a constant
4. Locks that blocks other queries should be avoided (Especially `Table-level Locks`)

- optimistic lock - concurrent read is allowed, write is not allowed
- pessimistic lock - concurrent read nor write not allowed

> Advanced Topic: [Locks, Latches, Enqueues and Mutex](https://minervadb.xyz/postgresql-locks-latches-enqueues-and-mutex "https://minervadb.xyz/postgresql-locks-latches-enqueues-and-mutex")

## 1. Agenda

1. Configurations & Tooling
2. Table Schemas
3. Queries
4. Indices
5. Monitoring
6. To be Extreme

## 2.1 Configurations & Tooling

- [PgBouncer](https://www.pgbouncer.org "https://www.pgbouncer.org")
  - Manage connection pool efficiently
  - Azure Flexible Server provides the integration of PgBounder as an [addon](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-pgbouncer "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-pgbouncer")
- [PgTune](https://pgtune.leopard.in.ua "https://pgtune.leopard.in.ua")
  - Optimize Postgres configuration file according to the hardware specification
- [Performance Insights](https://learn.microsoft.com/en-us/azure/postgresql/single-server/concepts-query-performance-insight "https://learn.microsoft.com/en-us/azure/postgresql/single-server/concepts-query-performance-insight")

  - All query statistics are stored in schema `azure_sys`, check [here](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-identify-slow-queries "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-identify-slow-queries")

  ```sql
  SELECT
      max(datname),
      query_id,
      query_sql_text,
      SUM(calls) total_calls,
      SUM(total_time) total_time,
      SUM(total_time) * 1.0 / SUM(calls) avg_time,
      SUM(rows) * 1.0 / SUM(calls)  avg_rows
  FROM query_store.qs_view q
  JOIN pg_database d ON q.db_id = d.oid
  GROUP BY query_id, query_sql_text
  ORDER BY avg_rows DESC
  LIMIT 10 -- change top N based on preferences;
  ```

> Reference is [here](https://techcommunity.microsoft.com/t5/azure-database-support-blog/how-to-get-the-query-text-of-azure-database-for-postgresql/ba-p/3233322 "https://techcommunity.microsoft.com/t5/azure-database-support-blog/how-to-get-the-query-text-of-azure-database-for-postgresql/ba-p/3233322")

## 2.2 Table Schemas

- Normalization

  - design the schema so that any change of one field only affect one record

- Denormalization

  - store module key on tables under the module
  - store the number of sum / average result of certain tables in parent table

## 2.3 Queries

### 2.3.0 How does a database engine process queries

1. Whether the query plan has cached, if yes, use the query plan
   - What developers can do: Make sure the query plans can be re-used as much as possible
2. Analyze the query
   - What developers can do: Be avoid to write complicated queries
3. Decide the query plan (Relational Algebra)
   - The Execution Plan Optimizer of Postgres is `Cost-based`, NOT `Rule-based`
   - What developers can do: Design the queries that can use the indices
4. Execute
   - What developers can do: Do not fetch too much data per query

### 2.3.1 Common mistakes

1. Include non-[DML (Data Manipulation Language)](https://en.wikipedia.org/wiki/Data_manipulation_language "https://en.wikipedia.org/wiki/Data_manipulation_language") in a single Transaction
   - Always-Slow Queries on itself, Randomly-Slow Queries
   - Include Queries are purely to fetch data
   - Include long running function calls NOT RELATED to database
     - send emails
     - send to service bus
     - communicate with external APIs
2. Get too many records from one query
   - Always-Slow queries on itself, Randomly-Slow Queries
   - growing tables
     - with `OR` and `UNION`
     - module tables without `limit`
3. [N+1 Queries](https://docs.sentry.io/product/issues/issue-details/performance-issues/n-one-queries "https://docs.sentry.io/product/issues/issue-details/performance-issues/n-one-queries")
   - Affect Concurrent Connections, Randomly-Slow Queries
   - when doing CRUD to the grand-children tables (companies -> projects -> records)

   ```sql
   SELECT id, "name" FROM classes WHERE school_code = 'LSC';
   -- | id     | name |  
   -- | 200101 | 1A   |
   -- | 200102 | 1B   |
   -- | 200103 | 1C   |
   -- | 200104 | 1D   |
   -- | 200105 | 1E   |
   -- | 200106 | 1F   |
   -- ...
   SELECT id, "name" FROM students WHERE class_id = '200101';
   SELECT id, "name" FROM students WHERE class_id = '200102';
   SELECT id, "name" FROM students WHERE class_id = '200103';
   SELECT id, "name" FROM students WHERE class_id = '200104';
   SELECT id, "name" FROM students WHERE class_id = '200105';
   SELECT id, "name" FROM students WHERE class_id = '200106';
   -- ...
   ```

4. Store huge records (>500KB each)
   - Always-Slow Queries on itself, Randomly-Slow Queries
   - Unstructured JSON
     - no schema
     - schema with recursive nature
     - schema with dynamic keys
   - Store encoded images
   - Store binary data
5. Illegitimate Use of TEXT filter with `LIKE`
   - Always-Slow Queries on itself, Randomly-Slow Queries
   - prefix search is acceptable
   - infix search is slow
   - postfix search is slow

> [Optimizations with Full-Text Search in PostgreSQL](https://www.alibabacloud.com/blog/optimizations-with-full-text-search-in-postgresql_595339 "https://www.alibabacloud.com/blog/optimizations-with-full-text-search-in-postgresql_595339")

### 2.3.2 What should know

0. [Query Plan](https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan "https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan")
1. Be avoid to query with complicated conditions that requires `Full Table search` on several tables
2. Be aware of queries on Critical Tables (User Table, `Modules` Tables)
3. For each query, indices should be used for tables > 1k records

## 2.4 Indices

### 2.4.0 The Nature

- Indices are a separate store that can help running the queries faster

- Good - Make some DDL queries faster while it makes a small portions of DDL queries slower
- Bad - Require more storage, DML queries slower

### 2.4.1 EXPLAIN & Query Plan

- IF you are unsure how the query performs, try `EXPLAIN` or `EXPLAIN ANALYZE`

#### 2.4.1.1 How to READ Query Plan

- [Scan Nodes](https://pganalyze.com/docs/explain/scan-nodes "https://pganalyze.com/docs/explain/scan-nodes")

> Advanced Topic(s):

> [What does "Recheck Cond" in Explain result mean?](https://stackoverflow.com/questions/50959814/what-does-recheck-cond-in-explain-result-mean "https://stackoverflow.com/questions/50959814/what-does-recheck-cond-in-explain-result-mean")

> ["Recheck Cond:" line in query plans with a bitmap index scan](https://dba.stackexchange.com/questions/106264/recheck-cond-line-in-query-plans-with-a-bitmap-index-scan "https://dba.stackexchange.com/questions/106264/recheck-cond-line-in-query-plans-with-a-bitmap-index-scan")

#### 2.4.1.2 The Concept

- Selectivity
- Cardinality

#### 2.4.1.3 Index Types

- `B-tree` use by default - O(log n)
- `Hash Index` could be a good choice UNDER a few circumstances - O(1)
  - REQUIREMENT: Postgres Version > 11, not us
- `GIST & GIN` for JSON data

> Advanced Topic(s):

> [How is it possible for Hash Index not to be faster than Btree for equality lookups?](https://dba.stackexchange.com/questions/212685/how-is-it-possible-for-hash-index-not-to-be-faster-than-btree-for-equality-looku "https://dba.stackexchange.com/questions/212685/how-is-it-possible-for-hash-index-not-to-be-faster-than-btree-for-equality-looku")

> [POSTGRESQL HASH INDEX PERFORMANCE](https://www.cybertec-postgresql.com/en/postgresql-hash-index-performance "https://www.cybertec-postgresql.com/en/postgresql-hash-index-performance")

#### 2.4.1.4 Micro-optimization

- Good for frequently used queries

- Partial Index
- Index on Expressions

```sql
-- Can only use inefficient PREFIX search
SELECT * FROM projects WHERE directory LIKE '00123>%';

-- Can use Index on Expressions, IF the length of SEARCH token is FIXED
SELECT * FROM projects WHERE SUBSTRING(directory, 0, 6) = '00123>';

CREATE INDEX IF NOT EXISTS project_directory_idx ON "projects"(SUBSTRING(directory, 0, 6));
```

## 2.5 Monitoring

- Alerts on Database Server Resource Usage
- Alerts to slow queries

## 2.6 To be Extreme

### 2.6.1 [No code](https://github.com/kelseyhightower/nocode "https://github.com/kelseyhightower/nocode")

> No code is the best way to write secure and reliable applications. Write nothing; deploy nowhere.

### 2.6.2 No Database queries

> No queries is the best way to make the database performing good.

- Query the replica
- Cache the result in application
- Do not store static configuration data
  - store in the services providing `strong consistency`
    - [S3](https://aws.amazon.com/tw/s3/consistency "https://aws.amazon.com/tw/s3/consistency")
    - [Blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/concurrency-manage "https://learn.microsoft.com/en-us/azure/storage/blobs/concurrency-manage")

> ~~No~~ Only necessary queries to Master Database is the best way to make the database performing good

## 3. Reference

- [Awesome Postgres](https://github.com/dhamaniasad/awesome-postgres "https://github.com/dhamaniasad/awesome-postgres")
- [SQL Performance Explained](https://sql-performance-explained.com "https://sql-performance-explained.com")
- [Use the Index, Luke](https://use-the-index-luke.com "https://use-the-index-luke.com")
- [Percona PostgreSQL Blog](https://www.percona.com/blog/category/postgresql "https://www.percona.com/blog/category/postgresql")
