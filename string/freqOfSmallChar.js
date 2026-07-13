//freq of small char only

let s = "madnadnkdadsvs";
let arr = new Array(26).fill(0);
let n = s.length;

for (let i = 0; i < n; i++) {
  let ascii = s.charCodeAt(i);

  arr[ascii - 97] = arr[ascii - 97] + 1; // substract 97 because to fill the index as 97 is the ascii value of 'a' which is starting char
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i + 97) + "->" + arr[i]);
  }
}
