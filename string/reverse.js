//reverse a string

let s = "abbdaaefa";
let rev = "";
for (let i = 0; i < s.length; i++) {
  console.log(s.charAt(i));
}

for (let i = s.length - 1; i >= 0; i--) {
  console.log(s.charAt(i));
}

for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s.charAt(i);
}

console.log(rev);
