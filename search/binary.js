let arr = [2, 5, 8, 18, 45, 67];
let n = arr.length;
let s = 0;
let e = n - 1;
let t = 18;
let i = -1;
while (t > 0) {
  let mid = Math.floor(s + (e - s) / 2);
  if (t === arr[mid]) {
    i = mid;
    break;
  } else if (arr[mid] < t) s = mid + 1;
  else e = mid - 1;
}
console.log(i === -1 ? "Not found" : "Found at " + i + " index");
