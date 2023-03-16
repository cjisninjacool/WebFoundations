"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
var Bob = new user_1.default("Bob Bobertson");
var Will = new user_1.default("Will Willimson");
var vali = new user_1.default("Vali Valison");
var joyefully = new user_1.default("Joyefully Joye");
var users = [Bob, Will, vali, joyefully];
users.forEach(element => {
    element.prettyPrint();
});
