function convert<T>(arr: T[]) {
  const new_arr = [];

  for (let i in arr) {
    if ((1 + Number(i)) % 3 === 0 && Number(i) !== 0) {
      const sub = [];
      sub.push(arr[Number(i) - 2], arr[Number(i) - 1], arr[i]);
      new_arr.push(sub);
    }
  }

  arr.length % 3 === 1 && new_arr.push([arr[arr.length - 1]]);
  arr.length % 3 === 2 &&
    new_arr.push([arr[arr.length - 2], arr[arr.length - 1]]);

  return new_arr;
}
export default convert;
