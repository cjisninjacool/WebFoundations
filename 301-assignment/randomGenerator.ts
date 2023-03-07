import random from 'random'

class ClassRandom{
    rollDice(){
        let ran = random.int((0),(6))
        return ran
    }
    flipCoin(){
        let ran = random.int((0),(1))
        let side = "";
        if (ran == 0){
            side = "heads";
        }
        if (ran == 1){
            side = "tails";
        }
        return side;
    }
}

export default ClassRandom;