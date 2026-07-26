/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let s = new Set();
  while (true) {
    let sum = 0;
    while (n > 0) {
      let d = n % 10;
      sum += d * d;
      n = Math.floor(n / 10);
    }
    if (sum === 1) return true;
    if (s.has(sum)) return false;
    s.add(sum);
    n = sum;
  }
  return true;
};
