# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Zustand

This template provides a minimal setup to get zustand working some instructions are as follows:

- Use individual statements so only that component get rendered while that value change otherwise it would re-render in all cases which are included in the state of the store. It would be an exact match with context so we don't wanna do this here is an example as following:
  ```const { count, increment } = useAppStore((state) => state)```

And in the following case this component will render only when count and increment get's changed.
```const increment = useAppStore((state) => state.increment)```
```const count = useAppStore((state) => state.count)```
