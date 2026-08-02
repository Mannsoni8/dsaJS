function gcd(n, a, b) {
  if (n === 1) return 1;
  if (a % n === 0 || b % n === 0) return n;
  gcd(n - 1, a, b);
}

function gcd2(a, b) {
  if (n === 1) return 1;
  if (a > b) return gcd2(a - b, b);
  return gcd2(a, b - a);
}
