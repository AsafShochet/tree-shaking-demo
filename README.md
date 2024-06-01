Lecture:

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

Summary:

1. Optimize the library itself:

- Export as esm (target)
- Named exports
- See what it imports and how it can be shaken
- peerDependencies

2. Optimize the consumer library

- Tree shake dependencies

3. Transition can be gradual (multiple outputs)
