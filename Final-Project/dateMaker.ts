import moment = require('moment');
import generatePass from './PasswordGenerator';


function generateDate(){
    return moment().format('LLLL');
}

export default generateDate;