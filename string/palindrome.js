// palindrome

let a = "malayalam";
let n = a.length;
let i = 0,
  j = n - 1;
let isPallindrom = true;
while (i < j) {
  if (a.charAt(i) !== a.charAt(j)) {
    isPallindrom = false;
    break;
  }
  i++;
  j--;
}
console.log(isPallindrom ? "Pallindrom" : "Not pallindrome");
