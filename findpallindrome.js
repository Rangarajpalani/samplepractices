let palind = 'tenet'; //[]
let x = palind.split("").reverse().join("");
const palindrome = (pali) => {
    if (pali === x) { return true; } else { return false; }
}
console.log(palindrome(palind));