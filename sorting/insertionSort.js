let arr = [5, 8, 1, 10, 9];
let n = arr.length;

for (let i = 1; i < n; i++) {
  let min = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > min) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = min;
}
console.log(arr);
