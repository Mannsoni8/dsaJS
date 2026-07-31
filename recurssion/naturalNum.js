function descending(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  descending(n - 1);
}

descending(5);
console.log();

function ascending(n) {
  if (n === 0) return;
  ascending(n - 1);
  process.stdout.write(n + " ");
}

ascending(5);
