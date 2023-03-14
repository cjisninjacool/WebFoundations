let firstName = "Dave"
let birthday = "March 29 2007"
console.log(firstName + " is a student learning to code and was born on " + birthday)

let fruits: number[] = [1,2,3,4,5,6,7,8,9,10];

//Kinda confused by the question so i gave two different of my interpritations of it
//Heres the first one that just adds all the numbers 1-10 together
console.log(fruits[0]+fruits[1]+fruits[2]+fruits[3]+fruits[4]+fruits[5]+fruits[6]+fruits[7]+fruits[8]+fruits[9])

//Heres the second one that just adds one of the numbers to a random number that i picked 
console.log(fruits[5] + 19)

let contact = {
    contactName: "Bob",
    dob: "02/02/94",
    role: "student"
}
let { contactName , dob , role } = contact
console.log(contactName+" is a "+ role +" learning to code and was born on "+dob);

//Thanks Mr. Pevny for lettime me redo the lesson.