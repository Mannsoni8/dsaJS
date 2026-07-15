let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(2);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = [
      [1, 2],
      [1, 2],
      [1, 2],
    ];
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(arr[i][j] + " ");
  }
  console.log();
}

// using new Array

let arr = Array.from({ length: 3 }, () => new Array(3).fill(0));
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(arr[i][j] + " ");
  }
  console.log();
}

//jacked array

let values = [[12, 23], [12, 3, 45], [34], [50, 60, 70, 80]];

let arr = new Array(values.length);

for (let i = 0; i < values.length; i++) {
  arr[i] = new Array(values[i].length);

  for (let j = 0; j < values[i].length; j++) {
    arr[i][j] = values[i][j];
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(arr[i][j] + " ");
  }
  console.log();
}
