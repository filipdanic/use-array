import { useState } from 'react';
import { updateAt } from './utils';

const useArray = (initialList) => {
  const [list, set] = useState(initialList);
  return [
    list,
    {
      set,
      empty: () => set([]),
      replace: (list) => set(list),
      push: (item) => set(l => [...l, item]),
      updateAt: (index, updateFn) => updateAt(index, updateFn, set),
      setAt: (index, value) => set(l =>
        [...l.slice(0, index), value, ...l.slice(index + 1)]
      ),
      removeAt: (index) => set(l => [...l.slice(0, index), ...l.slice(index + 1)]),
      filter: (filterFn) => set(l => l.filter(filterFn)),
      map: (mapFn) => set(l => [...l].map(mapFn)),
      sort: (sortFn) => set(l => [...l].sort(sortFn)),
      reverse: () => set(l => [...l].reverse()),
      mergeBefore: (arr) => set(l => [...arr].concat([...l])),
      mergeAfter: (arr) => set(l => [...l].concat([...arr])),
    }
  ];
}

export default useArray;
