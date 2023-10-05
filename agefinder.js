let dob = "20-02-2001";
let s = dob.split('-').map((str) => { return parseInt(str); })
let year = s[2];
const totaydate = new Date();
let currentyear = totaydate.getFullYear();
const age = (year, currentyear) => {
    return currentage = currentyear - year;
}
console.log(age(year, currentyear));