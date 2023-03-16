"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomstring = require("randomstring");
function generatePass() {
    return randomstring.generate({ length: 15, charset: 'alphanumeric' });
}
exports.default = generatePass;
