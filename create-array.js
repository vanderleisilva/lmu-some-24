module.exports = function createArray(size) {
  const list = Array(size);
  for (let i = 0; i < size; i++) {
    list[i] = i + 1;
  }
  return list;
};
