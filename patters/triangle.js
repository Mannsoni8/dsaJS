let n =5
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=i;j++){
//         process.stdout.write('*')
//     }
//     console.log()
// }

// reverse right-angel triange

// for (let i = 1; i <= n; i++) {
//     for(let j=n;j>=i;j--){
//         process.stdout.write('*')
//     }
//     console.log()
// }

//mirror right angel triange

for (let i = 1; i <=n; i++) {
    for(let j=1;j<=n-i;j++){
        process.stdout.write("  ")
    }
    for(let j=1;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log()
}

//triangle q

for (let i = 1; i <=n; i++) {
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ")
    }
    for(let j=1;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log()
}

// x pattern

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
       if(i===j || (i+j===n+1)) process.stdout.write("*")
       else process.stdout.write(" ") 
    }
    console.log()
}

// v pattern

for (let i = 0; i < n; i++) {
    let row = "";

    // Left side
    for (let j = 0; j < i; j++) {
        row += " ";
    }

    row += "*";

    // Middle spaces
    if (i !== n - 1) {
        for (let j = 0; j < 2 * (n - i - 1) - 1; j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}