let arr = [1, 2, 3, 4, 5, 2, 1, 3, 4, 1, 4, 5];
let map = new Map();
let n = arr.length;
//element->key & freq->value
for (let i = 0; i < n; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}

console.log(map);
