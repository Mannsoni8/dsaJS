// set methods
// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.delete(20);
// set.has(40);
// set.size;
// set.entries();
// set.clear();
// set.keys();
// set.values();
// set.forEach(() => {});

let arr = [1, 2, 3, 1, 5, 2, 3, 2, 2, 8, 8];
let set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) {
    set.delete(arr[i]);
  } else {
    set.add(arr[i]);
  }
}
console.log(set);
