// let s = "Manr";
// let a = s.slice(-4, 1);
// console.log(a);

// let s = "abbdaaefa";
// let rev = "";
// for (let i = 0; i < s.length; i++) {
//   console.log(s.charAt(i));
// }

// for (let i = s.length - 1; i >= 0; i--) {
//   console.log(s.charAt(i));
// }

// for (let i = s.length - 1; i >= 0; i--) {
//   rev = rev + s.charAt(i);
// }

// console.log(rev);

//palindrome
// let a = "malayalam";
// let n = a.length;
// let i = 0,
//   j = n - 1;
// let isPallindrom = true;
// while (i < j) {
//   if (a.charAt(i) !== a.charAt(j)) {
//     isPallindrom = false;
//     break;
//   }
//   i++;
//   j--;
// }
// console.log(isPallindrom ? "Pallindrom" : "Not pallindrome");

// let str = "JavaScript";
// console.log(str.slice(4, 10));

//uppercase to lower and lower to upper

// let s = "OJadDdaSDaa";
// let n = s.length;
// let ans = "";

// for (let i = 0; i < n; i++) {
//   let ascii = s.charCodeAt(i);
//   if (ascii >= 65 && ascii <= 90) {
//     ans = ans + String.fromCharCode(ascii + 32);
//   } else {
//     ans = ans + String.fromCharCode(ascii - 32);
//   }
// }
// console.log(ans);

// take an array of string word and a string Prefix Print the number of strings in words that contain pref as a prefix

// let word = ["prepare", "how", "to", "doit", "hoho"];
// let pref = "ho";
// let n = word.length;
// let count = 0;
// for (let i = 0; i < n; i++) {
//   if (word[i].startsWith(pref)) count++;
// }

// console.log(count);

// first and last letter uppercase

// let s = "hello how are you";
// let arr = s.split(" ");
// let n = arr.length;
// let ans = "";
// for (let i = 0; i < n; i++) {
//   let word = arr[i];
//   let first = word.charAt(0).toUpperCase();
//   let middel = word.substring(1, word.length - 1);
//   let last = word.charAt(word.length - 1).toUpperCase();
//   ans = ans + (first + middel + last) + " ";
// }
// console.log(ans);

//frequency of each character

// let s = "madnASDcaAASAD";
// let arr = new Array(128).fill(0);
// let n = s.length;

// for (let i = 0; i < n; i++) {
//   let ascii = s.charCodeAt(i);

//   arr[ascii] = arr[ascii] + 1;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i) + "->" + arr[i]);
//   }
// }

//one more method

// const str = "programming";
// const freq = {};

// for (let char of str) {
//   if (freq[char]) {
//     freq[char]++;
//   } else {
//     freq[char] = 1;
//   }
// }

// console.log(freq);

//freq of small char only

// let s = "madnadnkdadsvs";
// let arr = new Array(26).fill(0);
// let n = s.length;

// for (let i = 0; i < n; i++) {
//   let ascii = s.charCodeAt(i);

//   arr[ascii - 97] = arr[ascii - 97] + 1; // substract 97 because to fill the index as 97 is the ascii value of 'a' which is starting char
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(String.fromCharCode(i + 97) + "->" + arr[i]);
//   }
// }

// Anagram String

// let s1 = "car";
// let s2 = "arc";

// if (s1.length !== s2.length) {
//   console.log("Not anagram");
// } else {
//   let arr = new Array(26).fill(0);
//   for (let i = 0; i < s1.length; i++) {
//     let ascii = s1.charCodeAt(i);
//     arr[ascii - 97] = arr[ascii - 97] + 1;
//   }
//   for (let i = 0; i < s1.length; i++) {
//     let ascii = s2.charCodeAt(i);
//     arr[ascii - 97] = arr[ascii - 97] - 1;
//   }

//   let isAnagram = true;

//   for (let i = 0; i < 26; i++) {
//     if (arr[i] !== 0) {
//       isAnagram = true;
//       break;
//     }
//   }
//   console.log(isAnagram?"Anagram":"Not anagram")
// }

//MAximum number of word in sentence

// let sentences = [
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ];

// let maxWord = 0;

// for (let s of sentences) {
//   let word = s.split("");
//   maxWord = Math.max(maxWord, word.length);
// }

// console.log(maxWord);
