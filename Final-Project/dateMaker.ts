import moment = require('moment');


function generateDate(){
    return moment().format('LLLL');
}

export default generateDate;