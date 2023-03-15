"use strict";
let letters = ['w', 'e', ' ', 'a', 'r', 'e', ' ', 'B', 'S', 'T'];
let words = createWords(letters);
console.log(words);
words.forEach(word => {
    console.log(word);
});
function createWords(letters) {
    let temp = "";
    let result = [];
    letters.forEach(ltr => {
        if (ltr == ' ') {
            console.log(temp);
            result.push(temp);
            temp = "";
        }
        if (letters.indexOf(ltr) == letters.length - 1) {
            temp += ltr;
            result.push(temp);
        }
        if (ltr != ' ') {
            temp += ltr;
        }
    });
    return result;
}
