//MAximum number of word in sentence

let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

let maxWord = 0;

for (let s of sentences) {
  let word = s.split("");
  maxWord = Math.max(maxWord, word.length);
}

console.log(maxWord);
