// let arr = [12, 32, 124, 54, 15, 98, 34];
// let target = 4;
// const n = arr.length;

// let index = -1;

// for (let i = 0; i < n; i++) {
//   if (arr[i] === target) {
//     index = i;
//     break;
//   }
// }

// console.log(index === -1 ? "not found" : "found at " + index + " index");

let arr = [1, 2, 3, 4, 5, 6];
let st = 0;
let end = arr.length - 1;
let index = -1;
let target = 5;

while (st <= end) {
  let mid = Math.floor(st + (end - st) / 2);
  if (target === arr[mid]) {
    index = mid;
    break;
  } else if (target > arr[mid]) {
    st = mid + 1;
  } else {
    end = mid - 1;
  }
}

if (index === -1) console.log("not found");
else console.log("Found at " + index);
