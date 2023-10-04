let dob = "20-07-1982";
let s = dob.split('-').map((str) => { return parseInt(str); })
let year = s[2]
let currentyear = 2023
const age = (year, currentyear) => {
    return currentage = currentyear - year;
}
console.log(age(year, currentyear))