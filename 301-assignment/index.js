"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomGenerator_1 = __importDefault(require("./randomGenerator"));
let ne = new randomGenerator_1.default;
//get dice results
let diceResult = [];
for (let i = 0; i < 10; i++) {
    let cur = (ne.rollDice());
    diceResult.push(cur);
}
//log dise results
console.log(diceResult);
//get coin results
let CoinResults = [];
for (let i = 0; i < 50; i++) {
    let cur = (ne.flipCoin());
    CoinResults.push(cur.toString());
}
//get number of heads and tails
let numOfHeads = 0;
let numOfTails = 0;
for (let i = 0; i < 50; i++) {
    let res = CoinResults[i];
    if (res == 'heads') {
        numOfHeads += 1;
    }
    if (res == 'tails') {
        numOfTails += 1;
    }
    console.log(res);
}
//log coin results
console.log(CoinResults);
//log coin number results
console.log("Number Of Tails: " + numOfTails);
console.log("Number of heads: " + numOfHeads);
