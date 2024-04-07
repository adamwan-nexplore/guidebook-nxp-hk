# Code Review

- It is NOT a universal guide
- designed to note those common mistakes

1. Transaction should ONLY apply when modifying data. Fetching data is not necessary.
2. Do not include EMAIL actions in transaction
3. API interface is IMPORTANT. Always discuss with your teammates before you start
4. Input sanitization is VERY IMPORTANT. Relational KEYS can be a security issue for not handling properly
5. Typeorm for complicated queries
    - provide raw query
    - orWhere should be avoided (you need bracket sometime)
    - Bracket should be avoided
    - andWhere / orWhere use only if you have some conditions to work with
6. Promise.all should NOT be used with undeterminted array (e.g. `map()`)
7. Functions with too many arguements - should consider changing from `positional arguments` to `keyword arguments`
