// Anagram String

let s1 = "car";
let s2 = "arc";

if (s1.length !== s2.length) {
  console.log("Not anagram");
} else {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    let ascii = s1.charCodeAt(i);
    arr[ascii - 97] = arr[ascii - 97] + 1;
  }
  for (let i = 0; i < s1.length; i++) {
    let ascii = s2.charCodeAt(i);
    arr[ascii - 97] = arr[ascii - 97] - 1;
  }

  let isAnagram = true;

  for (let i = 0; i < 26; i++) {
    if (arr[i] !== 0) {
      isAnagram = true;
      break;
    }
  }
  console.log(isAnagram ? "Anagram" : "Not anagram");
}
