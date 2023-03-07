"use strict";
function split(str) {
    const output = str.split(' ');
    return output;
}
function combinetosentence(lis) {
    var output = "";
    for (let i = 0; i < lis.length; i++) {
        output += lis[i] + " ";
    }
    return output;
}
console.log(combinetosentence(split("Test is a test")));
