let promt = require('prompt-sync')()
let n
do{
    console.log('Enter 1 for add')
    console.log('Enter 2 for sub')
    n=Number(promt("Enter the nuber"))
    switch(n){
        case 1:
            let a = Number(promt('Enter first number'))
            let b = Number(promt('Enter second number'))
            console.log('Addition' + (a+b))
            break
        case 2:
            let a = Number(promt('Enter first number'))
            let b = Number(promt('Enter second number'))
            console.log('Sub' + (a-b))
            break
        default:
            console.log('Invalide number')        
    }
    n=Number(promt("Enter 10 for re continue"))
}while(n===10)