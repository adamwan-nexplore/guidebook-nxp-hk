# React, JSX Gotchas

1. ~~Strange~~ String conversion in JSX - `(empty string)`, `false`, `null`, `undefined` will render as `(empty string)`, while 0 renders as `0`

```typescript
  // correct
  const showDialog = values.length > 0;
  render (
    showDialog && <Dialog ...values />
  );
```

```typescript
render (
  // wrong, will always show `0` and the dialog
  values.length && <Dialog ...values />
);
```

2.
