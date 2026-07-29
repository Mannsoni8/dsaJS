let arr = [1, 2, 3, 2];
let map = new Map();
let n = arr.length;
let sum = 0;

for (let i = 0; i < n; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
for (let [key, value] of map) {
  if (value === 1) {
    sum += key;
  }
}

console.log(sum);
