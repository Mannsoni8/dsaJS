let arr = [1, 2, 3, 4, 5];
let k = 5;
let count = 0;

if (k >= arr.length) {
  //edge case
  k = k % arr.length;
}

for (let j = 1; j <= k; j++) {
  count++;
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}
console.log(count);
console.log(arr);
