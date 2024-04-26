# Data Management

## Handle production data

- ANY data patches should be prepared as a query script
- All query scripts should be reviewed before executed
- The original records should be backup in some kind
- All scripts should present some ways to demonstrate your change is effective
  - `returning *`
  - all additional select statements
- There MUST be at least one engineers as observers
- A trasnaction is ALWAYS required
- `commit` should be invoked until the observers AGREE to do so

```sql
BEGIN;

SELECT * FROM "users" WHERE id IN ('user1', 'user2', 'user3');

UPDATE "users" SET name = name || '-SMART' WHERE id IN ('user1', 'user2', 'user3') RETURNING *;

SELECT * FROM "users" WHERE id IN ('user1', 'user2', 'user3');

COMMIT;
ROLLBACK;
```

## Data Backup

### 1. If the patch only affects a couple of records, simply export the whole rows in a CSV file

### 2. If the patch affects a whole table or several tables, try to back up the original data in-place

```sql
CREATE TABLE users_20240227 AS
SELECT * FROM users;
```

### 3. If it is a complicated than that, dump the whole database
