function hello(n) {
  if (n === 0) return;
  hello(n - 1);
  console.log("hello word");
}
hello(5);
