let number = [7, -3, -13, 4, -91, -7];

function ao(num) {
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = i; j < num.length; j++) {
            if (num[i] > num[j]) {
                temp = num[j];
                num[j] = num[i];
                num[i] = temp;
            }
        }
    }
    return num;
}
console.log(ao(number));