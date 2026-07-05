let a  = [10,23,40,22,32]
let max = a[0]

for(let i=0;i<a.length;i++){
    if(a[i]>max[i]){
        max = a[i]
    }
}
console.log(max)