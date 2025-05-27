# React Hooks

- It briefly discusses all native React Hooks since Version 19

## How many Hooks

As of React 19, there are 18 native hooks:

- useState
- useReducer

- useContext

- useRef
- useImperativeHandle

- useEffect
- useLayoutEffect
- useInsertionEffect

- useMemo
- useCallback

- useTransition
- useDeferredValue

- useId
- useSyncExternalStore
- useDebugValue

- use
- useAction State
- useFormStatus
- useOptimistic

## Explain one by one

### 1. useState
- **How to use:**
  `const [state, setState] = useState(initialValue);`
- **Good use cases:**
  Local component state, toggles, form fields.
- **Compare:**
  Simpler than `useReducer` for basic state.

### 2. useReducer
- **How to use:**
  `const [state, dispatch] = useReducer(reducer, initialState);`
- **Good use cases:**
  Complex state logic, state with dependencies, or when next state depends on previous.
- **Compare:**
  More scalable than `useState` for complex state.

### 3. useEffect
- **How to use:**
  `useEffect(() => { /* side effect */ }, [dependencies]);`
- **Good use cases:**
  Data fetching, subscriptions, manual DOM changes.
- **Compare:**
  Runs after render, unlike `useLayoutEffect`.

### 4. useLayoutEffect
- **How to use:**
  Same as `useEffect`, but runs synchronously after all DOM mutations.
- **Good use cases:**
  Reading layout, synchronously re-rendering.
- **Compare:**
  Use only when you need to measure DOM or synchronously trigger reflows.

### 5. useInsertionEffect
- **How to use:**
  Like `useEffect`, but fires before DOM mutations.
- **Good use cases:**
  Injecting styles before browser paints.
- **Compare:**
  Rarely needed; for libraries.

### 6. useContext
- **How to use:**
  `const value = useContext(MyContext);`
- **Good use cases:**
  Accessing context values (theme, user, etc.).
- **Compare:**
  Alternative to prop drilling.

### 7. useRef
- **How to use:**
  `const ref = useRef(initialValue);`
- **Good use cases:**
  Accessing DOM nodes, persisting values across renders.
- **Compare:**
  Unlike state, changing `.current` does not trigger re-render.

### 8. useImperativeHandle
- **How to use:**
  Used with `forwardRef` to customize the instance value exposed to parent.
- **Good use cases:**
  Exposing imperative methods from child to parent.
- **Compare:**
  Advanced; rarely needed.

### 9. useCallback
- **How to use:**
  `const memoizedCallback = useCallback(fn, [dependencies]);`
- **Good use cases:**
  Memoizing callbacks to prevent unnecessary renders.
- **Compare:**
  Similar to `useMemo` but for functions.

### 10. useMemo
- **How to use:**
  `const memoizedValue = useMemo(() => computeValue, [dependencies]);`
- **Good use cases:**
  Expensive calculations, memoizing values.
- **Compare:**
  Similar to `useCallback` but for values.

### 11. useSyncExternalStore
- **How to use:**
  For subscribing to external stores with consistent updates.
- **Good use cases:**
  State management libraries, external data sources.
- **Compare:**
  More reliable than custom subscriptions in `useEffect`.

### 12. useTransition
- **How to use:**
  `const [isPending, startTransition] = useTransition();`
- **Good use cases:**
  Marking updates as non-urgent, improving UI responsiveness.
- **Compare:**
  Useful for concurrent rendering.

### 13. useDeferredValue
- **How to use:**
  `const deferredValue = useDeferredValue(value);`
- **Good use cases:**
  Deferring non-urgent updates, e.g., filtering large lists.
- **Compare:**
  Works with concurrent rendering.

## Reference

https://yuanzhixiang.com/en/blog/how-many-hooks-in-react-19
