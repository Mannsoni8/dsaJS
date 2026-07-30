let n = 25;
let ans = "";
while (n > 0) {
  let bit = n % 2;
  ans = ans + bit;
  n = Math.floor(n / 2);
}

console.log(ans);
