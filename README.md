Lecture:

# Setup

Before the talk:

1. Prepare npm links

```
cd library && npm link && npm link ../consumer/node_modules/react && npm link ../consumer/node_modules/react-dom && cd ../consumer && npm link tree-shaking-lecture
```

2. Change local code:

- library's package.json, remove type module
- uncommment the cjs build
- used default exports in library-index.ts, and consumer tsx
- remove sideEffects true in consumer
- de-optimize lodash

# Build wars

- ESM vs commonjs vs amd

# Code

- Show consumer project => build size, webpack for the consumer

- Show the library
- Show bundle analyzer + size
- Move react to peer dependency
- Add lodash
  -- sideEffects
  -- output format - esm (start with 2)
- Change to lodash esm
- Make output type esm
- Change to named exports
- Shake itself (lodash)
- Move dependencies to peer dependencies (react + react-dom)

- Show size graph
- Keep it over time

# Summary

1. Optimize the library itself:

- Export as esm (target)
- Named exports
- See what it imports and how it can be shaken
- peerDependencies

2. Optimize the consumer library

- Tree shake dependencies

3. Transition can be gradual (multiple outputs)

# Motivations:

- Size
- Security
- Side effect
