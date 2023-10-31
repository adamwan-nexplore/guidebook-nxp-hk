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
begin;

SELECT * FROM "users" where id IN ('user1', 'user2', 'user3');

UPDATE "users" SET name = name || '-SMART' where id IN ('user1', 'user2', 'user3') RETURNING *;

SELECT * FROM "users" where id IN ('user1', 'user2', 'user3');

commit;
rollback;
```