export const getNextProp = (object, key) => {
  const keys = Object.keys(object);
  const index = keys.indexOf(key);
  return index !== -1 && keys[index + 1] && keys[index + 1];
};
