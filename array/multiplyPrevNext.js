let arr = [2, 3, 4];
const n = arr.length;

let prev = arr[0];

arr[0] = arr[0] * arr[1];

for (let i = 1; i < n; i++) {
  let current = arr[i];
  arr[i] = prev * arr[i + 1];
  prev = current;
}

arr[n - 1] = prev * arr[n - 1];

console.log(arr);
