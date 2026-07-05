// let prompt = require("prompt-sync");
let n = 145
let ans = 0;
let temp = n;
while (temp > 0) {
  let dig =temp % 10;
  let fact = 1;
  for (let i = 1; i <= dig; i++) {
    fact = fact * i;
  }

  ans = ans + fact;
  temp =  Math.floor(temp / 10);
}

if (n === ans) console.log("Strong number");
else console.log("Not strong number");