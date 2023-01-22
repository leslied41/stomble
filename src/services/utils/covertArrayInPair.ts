function converArrayInPair(arr) {
  const _arr = [];
  for (let key in arr) {
    if (Number(key) % 2 === 0) {
      const pair = [];
      pair.push(arr[key]);
      if (arr[Number(key) + 1]) {
        pair.push(arr[Number(key) + 1]);
      }
      _arr.push(pair);
    }
  }
  return _arr;
}
export default converArrayInPair;
