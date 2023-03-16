var randomstring = require("randomstring");
import generatePass from './PasswordGenerator';
import generateDate from './dateMaker';

class user{
    userID: number
    userName: string
    password: string
    createdDate: string
    
    constructor(userName:string){
        this.userID = randomstring.generate({length:4,charset:'1234567890'});
        this.userName = userName;
        this.password = generatePass();
        this.createdDate = generateDate();
    }
    prettyPrint(){
        console.log(`
-------------------------
ID: ${this.userID}
Username: ${this.userName}
Password: ${this.password}
Created On: ${this.createdDate}
`)
    }
}
export default user;