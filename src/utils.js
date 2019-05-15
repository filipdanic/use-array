export const updateAt = (index, updateFn, set) =>
  set(l => {
    const copy = l.slice(0);
    const item = copy[index];
    copy[index] = updateFn(item);
    return copy;
  });
