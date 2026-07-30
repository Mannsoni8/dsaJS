let n = 10110;
let deci = 0;
let count = 0;
while (n > 0) {
  let bit = n % 10;
  deci = deci + bit * Math.pow(2, count);
  n = Math.floor(n / 10);
  count++;
}
console.log(deci);
