import ClassRandom from './randomGenerator'

let ne = new ClassRandom;

//get dice results
let diceResult: number[] = [];
for (let i = 0; i < 10; i++) {
    let cur = (ne.rollDice())
    diceResult.push(cur);
}
//log dise results
console.log(diceResult);

//get coin results
let CoinResults: string[] = [];
for (let i = 0; i < 50;i++){
    let cur = (ne.flipCoin());
    CoinResults.push(cur.toString());
}
//get number of heads and tails
let numOfHeads = 0;
let numOfTails = 0;
for (let i = 0; i < 50; i++){
    
    let res = CoinResults[i]

    if (res == 'heads'){
        numOfHeads += 1;
    }
    if (res == 'tails'){
        numOfTails += 1;
    } 
    console.log(res)
}

//log coin results
console.log(CoinResults);
//log coin number results
console.log("Number Of Tails: " + numOfTails);
console.log("Number of heads: " + numOfHeads);