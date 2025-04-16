# Connection Pool on Postgres <!-- omit in toc -->

Table of Contents

- [What we will cover](#what-we-will-cover)
- [Why Connection Pool](#why-connection-pool)
  - [Key Benefits of Connection Pooling](#key-benefits-of-connection-pooling)
  - [Why we need both?](#why-we-need-both)
- [node-postgres](#node-postgres)
  - [Why use `pool` mode?](#why-use-pool-mode)
  - [Example Usage](#example-usage)
- [PgBouncer](#pgbouncer)
  - [Why use `transaction` mode?](#why-use-transaction-mode)
    - [Further Reading](#further-reading)

## What we will cover

- Connection Pooling
- node-postgres
- PgBouncer

## Why Connection Pool

- Connections in Postgres are **process-based** - meaning each connection spawns a new process on the server.
- Establishing a connection is **resource-intensive** and **time-consuming** due to the overhead of process creation and authentication.
- A connection pool maintains a pool of persistent connections between the pool and Postgres.
- The handshake between the application and the connection pool is much **lighter** compared to creating a new connection directly with Postgres.

### Key Benefits of Connection Pooling

- **Reduced Latency**: Reusing existing connections minimizes the time spent on establishing new ones.
- **Efficient Resource Utilization**: Limits the number of active connections to prevent overwhelming the database server.
- **Scalability**: Handles a large number of client requests efficiently.

### Why we need both?

- They can make pg works FASTER
- They can work together to make pg even FASTER

## [node-postgres](https://node-postgres.com)

- `node-postgres` is a client library for interacting with Postgres in `Node.js`.
- It can facilitate the re-use per application
- It abstracts `connection` as `client`.
- It provides two modes for managing connections:
  - [Client](https://node-postgres.com/apis/client): Creates a single connection for direct use.
  - [Pool](https://node-postgres.com/apis/pool): Manages a pool of reusable connections.

### Why use `pool` mode?

- In 99% of use cases, `pool` is the preferred choice because:
  - It automatically manages connection reuse.
  - It reduces the overhead of creating and closing connections for every query.
  - It supports concurrent queries efficiently.

### Example Usage

```javascript

// Pool mode

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

(async () => {
  // 1. Re-use one of the idle connections
  // 2. No need to return the connection to the pool
  await pool.query('SELECT NOW() AS now');


  // 3. Transaction might not be working!
  await pool.query('BEGIN;');
  await pool.query('SELECT NOW() AS now'); // Might not be the same connection!
  await pool.query('SELECT NOW() AS now'); // Might not be the same connection!
  await pool.query('COMMIT;'); // Might not be the same connection!


  // 4. Each connection is abstracted as `client` object
  // 5. Pick one of the idle connections, continue to use it
  // 6. Transaction will work here
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW() AS now');
    console.log(res.rows[0]);
  } finally {
    // 7. Need to return the connection to the pool, otherwise the connection will leak
    client.release();
  }
})();

pool.end(); // 8. Close all connections when done
```

- For more details, refer to this [StackOverflow discussion](https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres).

## [PgBouncer](https://www.pgbouncer.org)

- `PgBouncer` is a lightweight server-side connection pool for Postgres.
- It is a standalone program
- It can facilitate the re-use per application, a group of applications, or even for all the connections to the database - depending on the architecture
- It acts as an intermediary between the application and the database, managing connections efficiently.
- It listens on port **6534** by default.
- It provides three modes for managing connections:
  - [Session](https://www.pgbouncer.org/features.html): Each client connection is tied to a single Postgres session.
  - [Transaction](https://www.pgbouncer.org/features.html): A connection is assigned for the duration of a transaction.
  - [Statement](https://www.pgbouncer.org/features.html): A connection is assigned for a single SQL statement.

- Good news! Azure offers a [built-in PgBouncer integration](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-pgbouncer) for its Flexible Server deployment, simplifying setup and management.

### Why use `transaction` mode?

- In 80% of scenarios, `transaction` mode provides the best balance between performance and resource utilization.
- You can still use the transaction while it provides a good re-use of connections

#### Further Reading

- [PgBouncer is Useful](https://jpcamara.com/2023/04/12/pgbouncer-is-useful.html)
- [Postgres Connection Modes](https://novemberde.github.io/post/2024/10/21/postgres-connection-mode-session-mode)
