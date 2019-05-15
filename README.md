[![NPM](https://img.shields.io/npm/v/use-array.svg)](https://www.npmjs.com/package/use-array)
# use-array

A custom React hook that lets you manipulate an array data structure without ever needing extra utilities.

[👉 Demo site and docs.](https://filipdanic.github.io/use-array/)

Start with:

```bash
npm install --save use-array
```

Then, import and use the hook:

```javascript
import useArray from 'use-array'
// …in your functional component:
const [ list, {
  set, empty, replace, push,
  updateAt, setAt, removeAt,
  filter, map, sort, reverse,
  mergeBefore, mergeAfter,
}] = useArray(defaultList);
```

## Docs

The complete documentation as well as a live demo [is available here.](https://filipdanic.github.io/use-array/)

## License

MIT © [filipdanic](https://github.com/filipdanic)
