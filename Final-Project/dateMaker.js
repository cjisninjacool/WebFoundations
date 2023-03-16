"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
function generateDate() {
    return moment().format('LLLL');
}
exports.default = generateDate;
