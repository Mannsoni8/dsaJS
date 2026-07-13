//frequency of each character

let s = "madnASDcaAASAD";
let arr = new Array(128).fill(0);
let n = s.length;

for (let i = 0; i < n; i++) {
  let ascii = s.charCodeAt(i);

  arr[ascii] = arr[ascii] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + "->" + arr[i]);
  }
}

//one more method

const str = "programming";
const freq = {};

for (let char of str) {
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

console.log(freq);
