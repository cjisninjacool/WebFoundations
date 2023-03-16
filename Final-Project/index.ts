import user from './user'

var Bob = new user("Bob Bobertson")
var Will = new user("Will Willimson")
var vali = new user("Vali Valison")
var joyefully = new user("Joyefully Joye")

var users = [Bob, Will, vali, joyefully]

users.forEach(element => {
    element.prettyPrint()
});