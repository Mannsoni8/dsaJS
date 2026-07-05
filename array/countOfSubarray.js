let arr = [1, 2, 3, 4, 5];
let target = 7;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === target) {
      count++;
    }
  }
}

console.log(count);
