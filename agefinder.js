let dob = "20-07-1982";
let s = dob.split('-').map((str) => { return parseInt(str); })
let year = s[2];
let date =new date();
let currentyear = date.getfullyear();
const age = (year, currentyear) => {
    return currentage = currentyear - year;
}
console.log(age(year, currentyear))
