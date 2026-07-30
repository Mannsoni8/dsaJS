let n = 14;
let i = 2;

if ((n & (1 << i)) !== 0) {
  console.log("Set bit");
} else {
  console.log("Not set");
}
