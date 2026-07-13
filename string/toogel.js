// toggel alphabet A-a and a-A

let s = "abcDEF";
let n = s.length;
let ans = "";
for (let ch of s) {
  if (ch >= "A" && ch <= "Z") {
    ans += ch.toLowerCase();
  } else if (ch >= "a" && ch <= "z") {
    ans += ch.toUpperCase();
  } else {
    ans += ch;
  }
}
console.log(ans);
