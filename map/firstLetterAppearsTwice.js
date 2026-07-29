/**
 * Find the first character that appears twice in a string.
 * @param {string} s - The input string
 * @return {string} - The first repeated character
 */

let s = "abccbaacz";
let map = new Map();

for (let i = 0; i < s.length; i++) {
  if (map.has(s[i])) {
    console.log(s[i]);
    break;
  }
  map.set(s[i], i);
}
