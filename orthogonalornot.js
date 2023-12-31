let matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 7, 1]
];
const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function transpose(mat) {
    //Array.from({length: matrix[0].length},()=>new Array(matrix.length).fill(0));
    // console.log(result)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            //let temp = mat[i][j]
            // mat[i][j]=mat[j][i]
            // mat[j][i]=temp
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
transpose(matrix);
console.log(matrix);
console.log(result)
console.log();
//A'A=I
let n = 3;
let empty = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
const multiply = (matrix, result) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                empty[i][j] += matrix[i][k] * result[k][j];

            }
        }
    }
}
multiply(matrix, result);
console.log(empty);
let I = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]

function identical(empty, I) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; i < n; j++) {
            if (empty[i][j] !== I[i][j]) {
                return "no";

            }
        }
        return "yes";
    }
}
console.log(identical(empty, I));