/**
 * Sort people by height in descending order.
 * @param {string[]} names - Array of names
 * @param {number[]} heights - Array of heights
 * @return {string[]} - Sorted names by descending height
 */

const names = ["Alice", "Bob", "Charlie"];
const height = [165, 180, 170];

let map = new Map();
let ans = [];

for (let i = 0; i < names.length; i++) {
  map.set(height[i], names[i]);
}

height.sort((a, b) => b - a);

for (let h of height) {
  ans.push(map.get(h));
}

console.log(ans);
