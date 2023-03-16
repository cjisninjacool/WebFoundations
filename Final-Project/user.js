"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomstring = require("randomstring");
const PasswordGenerator_1 = __importDefault(require("./PasswordGenerator"));
const dateMaker_1 = __importDefault(require("./dateMaker"));
class user {
    constructor(userName) {
        this.userID = randomstring.generate({ length: 4, charset: '1234567890' });
        this.userName = userName;
        this.password = (0, PasswordGenerator_1.default)();
        this.createdDate = (0, dateMaker_1.default)();
    }
    prettyPrint() {
        console.log(`
-------------------------
ID: ${this.userID}
Username: ${this.userName}
Password: ${this.password}
Created On: ${this.createdDate}
`);
    }
}
exports.default = user;
