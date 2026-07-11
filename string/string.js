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
