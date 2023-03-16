var randomstring = require("randomstring");


function generatePass(){
    return randomstring.generate({length: 15,charset: 'alphanumeric'});
}


export default generatePass;