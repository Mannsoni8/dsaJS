let arr = [1, 2, 4, 5];
let target = 6;
let ans = [];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(target - arr[i])) {
    ans.push(i);
    ans.push(map.get(target - arr[i]));
  } else {
    map.set(arr[i], i);
  }
}
console.log(ans);
