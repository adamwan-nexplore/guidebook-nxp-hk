# Data Management <!-- omit in toc -->

**Table of Contents**

- [1. Handle production data](#1-handle-production-data)
- [2. Data Backup](#2-data-backup)
  - [2.1. If the patch only affects a couple of records, simply export the whole rows in a CSV file](#21-if-the-patch-only-affects-a-couple-of-records-simply-export-the-whole-rows-in-a-csv-file)
  - [2.2. If the patch affects a whole table or a few tables, try to back up the original data in-place](#22-if-the-patch-affects-a-whole-table-or-a-few-tables-try-to-back-up-the-original-data-in-place)
  - [2.3. If several tables are affected, dump the whole database](#23-if-several-tables-are-affected-dump-the-whole-database)

## 1. Handle production data

- ANY data patches should be prepared as a query script
- All query scripts should be reviewed before executed
- The original records should be backup in some kind
- All scripts should present some ways to demonstrate your change is effective
  - `returning *`
  - all additional select statements
- There MUST be at least one engineers as observers
- A transaction is ALWAYS required
- `commit` should be invoked until the observers AGREE to do so

```sql
BEGIN;

SELECT * FROM "users" WHERE id IN ('user1', 'user2', 'user3');

UPDATE "users" SET name = name || '-SMART' WHERE id IN ('user1', 'user2', 'user3') RETURNING *;

SELECT * FROM "users" WHERE id IN ('user1', 'user2', 'user3');

COMMIT;
ROLLBACK;
```

## 2. Data Backup

### 2.1. If the patch only affects a couple of records, simply export the whole rows in a CSV file

### 2.2. If the patch affects a whole table or a few tables, try to back up the original data in-place

```sql
CREATE TABLE users_20240227 AS
SELECT * FROM users;
```

### 2.3. If several tables are affected, dump the whole database
