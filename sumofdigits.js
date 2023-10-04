let num = 134;

let sum = num.toString().split('').map((str) => { return parseInt(str) }) //[1,3,4]
let addition = sum.reduce((a, b) => { return a + b; })
console.log(addition);