let arr = [21, 32, 342, 123, 43];
let t = 32;
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == t) {
    index = i;
    break;
  }
}
console.log(index === -1 ? "Not found" : "found at" + index + " index ");
