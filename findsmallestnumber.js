let smallnumber = [6, 29, -7, 84, 91, -8, 13];
let x = smallnumber[0];
for (let i = 0; i < smallnumber.length; i++) {
    if (x > smallnumber[i]) {
        empty = x;
        x = smallnumber[i];
        smallnumber[i] = empty;

    }
}
console.log(x);