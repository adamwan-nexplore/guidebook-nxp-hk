# The Nature of React <!-- omit in toc -->

## Why React? - the goods

- Is a modern component of web applications

- It provides a structured way to customize UIs
  - looks & feels
  - the way of interact with UIs

- Faster to update UIs due to Virtual DOM (In memory JS structures)
  - Single actual DOM rendering
  - Multiple re-renderings

- Can only fetch necessary data instead of full HTML page

- Provide a functional way to manage data

- Define a reactive approach to update UI automatically when actions are triggered

## The bads

- Slow on the first load
- Require a lot of toolchains for Modern React Development

## React Toolings

1. Build Tools

   - [vite](https://vite.dev)
   - ~~[gatsby](https://www.gatsbyjs.com)~~
   - ~~[nextjs](https://nextjs.org)~~

2. Libraries

   - [react](https://react.dev)
   - react-dom
   - [babel](https://babeljs.io)
   - [typescript](https://www.typescriptlang.org)
   - ~~[swc](https://swc.rs)~~
   - JSX / TSX
   - eslint

3. Extended Libraries

   - tanstack query
   - react-router
   - i18n

## React Concepts

- hooks
- props & states
- functional-based components
- stateful & stateless components

1. Testing
2. Extra

## Thinking in React

- A recommended approach from React Official to build React App
- Step 1: Break the UI into a component hierarchy
- Step 2: Build a static version in React
- Step 3: Find the minimal but complete representation of UI state
- Step 4: Identify where your state should live
- Step 5: Add inverse data flow

## Common Issues

- prop-drilling
- over-use states
- re-rendering
- over-use of context

## Gotchas

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

- props of primitive data vs component

## Recommended Reading

  <!-- https://tkdodo.eu/blog/dont-over-use-state
  https://tkdodo.eu/blog/putting-props-to-use-state
  https://tkdodo.eu/blog/things-to-know-about-use-state
  https://tkdodo.eu/blog/use-state-for-one-time-initializations
  https://tkdodo.eu/blog/use-state-vs-use-reducer

  https://2019.wattenberger.com/blog/react-hooks
 -->

## Reference

- [React Official Website](https://react.dev "https://react.dev")
- [React Quickly, 2nd Edition](https://www.manning.com/books/react-quickly-second-edition "https://www.manning.com/books/react-quickly-second-edition")
- [React in Depth](https://www.manning.com/books/react-in-depth "https://www.manning.com/books/react-in-depth")
- [Advanced React](https://www.manning.com/books/react-in-depth "https://www.manning.com/books/react-in-depth")
- [Advanced React Course](https://www.youtube.com/playlist?list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp "https://www.youtube.com/playlist?list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp")
