//uppercase to lower and lower to upper

let s = "OJadDdaSDaa";
let n = s.length;
let ans = "";

for (let i = 0; i < n; i++) {
  let ascii = s.charCodeAt(i);
  if (ascii >= 65 && ascii <= 90) {
    ans = ans + String.fromCharCode(ascii + 32);
  } else {
    ans = ans + String.fromCharCode(ascii - 32);
  }
}
console.log(ans);
