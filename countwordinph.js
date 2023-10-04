let string = "     your writi nnum ran e yared  342   yfgg     bgjsgd dbkj sd ddkkfk";
let countword = 0;
let strg = string.trim().replace(/\s+/g, " ").split(" ") //replace(/ /g," ")

function wordcount(str) {
    for (let i = 0; i < strg.length; i++) {
        if (typeof strg[i] === 'string') {
            countword = countword + 1;
        }
    }
    return countword;
}
console.log(wordcount(strg));