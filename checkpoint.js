function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let x = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > x; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = x;
  }
  return arr;
}
console.log(insertionSort([12, 11, 13, 5, 6]));
