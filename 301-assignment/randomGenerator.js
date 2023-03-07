"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("random"));
class ClassRandom {
    rollDice() {
        let ran = random_1.default.int((0), (6));
        return ran;
    }
    flipCoin() {
        let ran = random_1.default.int((0), (1));
        let side = "";
        if (ran == 0) {
            side = "heads";
        }
        if (ran == 1) {
            side = "tails";
        }
        return side;
    }
}
exports.default = ClassRandom;
