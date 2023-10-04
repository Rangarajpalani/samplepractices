let array = ['ranga', 5, 'ramya', -8, 'ravi', 99, 'keerthi']
let string = [];
let number = [];
array.forEach(arr => {
    if (typeof(arr) === "number") {
        string.push(arr)
    }
    if (typeof(arr) === "string") {
        number.push(arr)
    }
})
console.log(string)
console.log(number)