let year = 2023;
const leapyear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}
console.log(leapyear(year));
