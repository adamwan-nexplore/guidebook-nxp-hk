# The Introduction of Database Query Performance
##                 on PostgreSQL

## 1. Target

- Purpose
    - OLTP (Online Transaction Processing)
        - store the daily work result
    - ~~OLAP (Online Analytical Processing)~~
        - report data with target groups

- Vendors
    - Postgres
    - ~~MySQL~~
    - ~~OracleDB~~
    - ~~SQL Server~~

## 2. Good Performance 

1. `Good Enough` Number of Concurrent Connections
2. No Always-Slow Queries
3. No Randomly-Slow Queries

> It is IMPOSSIBLE to avoid Randomly-Slow Queries
> 
> There are factors cannot be controlled
>   - networking
>   - connection pools
>   - read-write bottlenecks from storage

## 3. Priniciples

1. Transactional queries should be FAST (<500ms)
2. Avoid N+1 Queries
3. Clear Number of Queries inside a transaction
4. Reduction of Locks, especially be avoid to have too many `Table-level Locks`

> Advanced Topic: [Locks, Latches, Enqueues and Mutex](https://minervadb.xyz/postgresql-locks-latches-enqueues-and-mutex/)

## 4. What to cover

1. Configurations & Toolings
2. Table Schemas
3. Queries
4. Indices
5. Monitoring
6. To be Extreme

## 4.1 Configurations & Toolings

- [PgBouncer](https://www.pgbouncer.org "https://www.pgbouncer.org")
    - Manage connection pool efficiently
    - Azure Flexible Server provides an [addon](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-pgbouncer "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-pgbouncer") to improve the connection pool
- [PgTune](https://pgtune.leopard.in.ua "https://pgtune.leopard.in.ua")
    - Optimize the postgres set up according to the hardware specification
- [Performance Insights](https://learn.microsoft.com/en-us/azure/postgresql/single-server/concepts-query-performance-insight "https://learn.microsoft.com/en-us/azure/postgresql/single-server/concepts-query-performance-insight")
    - All query result are stored in schema `azure_sys`, check [here](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-identify-slow-queries "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-identify-slow-queries")

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
    LIMIT 50 -- change top N based on preferences;
    ```
    
    source is [here](https://techcommunity.microsoft.com/t5/azure-database-support-blog/how-to-get-the-query-text-of-azure-database-for-postgresql/ba-p/3233322 "https://techcommunity.microsoft.com/t5/azure-database-support-blog/how-to-get-the-query-text-of-azure-database-for-postgresql/ba-p/3233322")

## 4.2 Table Schemas

- Denormalization
    - store module key on tables under the module
    - store the number of sum / average result of certain tables in parent table
- Normalization
    - be avoid to update same set of data in multiple places

## 4.3 Queries

### 4.3.0 How does query works

#### 4.3.0.1 The Nature

1. Whether the query plan has cached, if yes, use the query plan
    - What developers can do: Make sure the query plan can be re-used as much as possible
2. Analyze the query
    - What developers can do: Be avoid to write complicated query
3. Decide the query plan (Relational Algebra)
    - In Postgres, it uses a `Cost-based Execution Plan Optimizer`
    - What developers can do: Design the query can hit the index
4. Execute
    - What developers can do: Do not fetch too much data

#### 4.3.0.2 The Concept

- Selectivity
- Cardinality

### 4.3.1 Common mistakes

1. (Always-Slow Queries on itself, Randomly-Slow Queries) Include non-[DML (Data Manipluation Languages)](https://en.wikipedia.org/wiki/Data_manipulation_language "https://en.wikipedia.org/wiki/Data_manipulation_language") in a single Transaction
2. (Always-Slow queries on itself, Randomly-Slow Queries) Get too many records from one single query
    - growing tables
        - with `OR` and `UNION`
        - module tables without `limit`
3. (Affect Concurrent Connections, Randomly-Slow Queries) [N+1 Queries](https://docs.sentry.io/product/issues/issue-details/performance-issues/n-one-queries "https://docs.sentry.io/product/issues/issue-details/performance-issues/n-one-queries")
    - when doing CRUD to the grand-children tables (company -> projects -> records)
4. (Always-Slow Queries on itself, Randomly-Slow Queries) Store huge records (>500KB)
    - Unstructured JSON
        - no schema
        - schema with recursion
        - schema with dynamic keys
    - Store encoded images
    - Store binary data
5. (Always-Slow Queries on itself, Randomly-Slow Queries) Illegitimate Use of TEXT filter with `LIKE`
    - prefix search is acceptable
    - infix search is slow
    - postfix search is slow

### 4.3.2 What should check

0. [Query Plan](https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan "https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan")
1. [DML (Data Manipluation Languages)](https://en.wikipedia.org/wiki/Data_manipulation_language "https://en.wikipedia.org/wiki/Data_manipulation_language") queries ONLY in a single Transaction
    - No queries to fetch data
    - Be avoid to have long running call NOT RELATED to database
        - send emails
        - send to service bus
        - communicate with external APIs
2. Queries with a dyanmic number of `UNION`s and `OR`s
3. Queries on Critical Tables (User Table, `Modules` Tables)
4. Queries joining more than 5 tables
5. For each query, indices should be used for tables > 1k records

## 4.4 Indices

- Good - Make some DDL queries faster, make a few DDL queries slower
- Bad - Require more storage, DML queries slower

> Advanced Topic: [Optimizations with Full-Text Search in PostgreSQL](https://www.alibabacloud.com/blog/optimizations-with-full-text-search-in-postgresql_595339 "https://www.alibabacloud.com/blog/optimizations-with-full-text-search-in-postgresql_595339")

## 5. Monitoring

- Alerts on Database Server Resource Usage
- Alerts to slow queries

## 6. To be Extreme

### 6.1 [No code](https://github.com/kelseyhightower/nocode "https://github.com/kelseyhightower/nocode")

> No code is the best way to write secure and reliable applications. Write nothing; deploy nowhere.

### 6.2 No Database queries

> No queries is the best way to make the database performancing good.

- Query the replica
- Cache the result in application
- Do not store the static configuration data
    - store in the services providing `strong consistency`
        - [S3](https://aws.amazon.com/tw/s3/consistency "https://aws.amazon.com/tw/s3/consistency")
        - [Blob storage](https://learn.microsoft.com/en-us/azure/storage/blobs/concurrency-manage "https://learn.microsoft.com/en-us/azure/storage/blobs/concurrency-manage")

> ~~No~~ Only necessary queries to Master Database is the best way to make the database performancing good

## Reference

- [Awesome Postgres](https://github.com/dhamaniasad/awesome-postgres "https://github.com/dhamaniasad/awesome-postgres")
- [SQL Performance Explained](https://sql-performance-explained.com "https://sql-performance-explained.com")
- [Use the Index, Luke](https://use-the-index-luke.com "https://use-the-index-luke.com")
- [Percona PostgreSQL Blog](https://www.percona.com/blog/category/postgresql "https://www.percona.com/blog/category/postgresql")