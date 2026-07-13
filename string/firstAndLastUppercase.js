// first and last letter uppercase

let s = "hello how are you";
let arr = s.split(" ");
let n = arr.length;
let ans = "";
for (let i = 0; i < n; i++) {
  let word = arr[i];
  let first = word.charAt(0).toUpperCase();
  let middel = word.substring(1, word.length - 1);
  let last = word.charAt(word.length - 1).toUpperCase();
  ans = ans + (first + middel + last) + " ";
}
console.log(ans);
