let arr = [12, 31, 34, 56, 76, 88];
let s = 0;
let e = arr.length - 1;
let i = -1;
t = 88;
while (t > 0) {
  let mid = Math.floor(s + (e - s) / 2);
  if (arr[mid] === t) {
    i = mid;
    break;
  } else if (arr[mid] < t) s = mid + 1;
  else e = mid - 1;
}
console.log(i === -1 ? "Not found" : "Found at " + i + " index");
