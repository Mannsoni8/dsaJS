// take an array of string word and a string Prefix Print the number of strings in words that contain pref as a prefix

let word = ["prepare", "how", "to", "doit", "hoho"];
let pref = "ho";
let n = word.length;
let count = 0;
for (let i = 0; i < n; i++) {
  if (word[i].startsWith(pref)) count++;
}

console.log(count);
