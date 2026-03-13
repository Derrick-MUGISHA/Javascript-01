

//   if condition 


let age = 10;


if (age >= 18) { // true of false 
    console.log("You are an adult")
}



let number = 10; 

if (number > 0) {
    console.log("Positive")
}


let years = 10;

if (years >= 18) {
    console.log("You can Vote")
} else {
    console.log("You are not Allowed to Vote")

}




let marks = 50;

if (marks >= 90) {
    console.log("Grade A")
} else if (marks >= 80) {
    console.log("Grade B")
} else if (marks >= 70) {
    console.log("Grade C")
} else if (marks >= 60) {
    console.log("Grade D")
} else if (marks >= 50) {
    console.log("Grade E")
} else {
    console.log("Grade F")
}


// let userName= "Admin"
// let password = "123453"


// if (userName === "Admin") {

//     if (password === "12345") {
//         console.log("Valid User Name and Password")
//     }else {
//         console.log("Invalid Password")
//     }

// } else {
//     console.log("Invalid User Name")
// }


// assignment operator  by the use of && or || 4 minutes
// these is the combination of the logical operators and conditions
let userName = "Admin"
let password = "12345"

if (userName ==="Admin"&& password ==="1234"){
    console.log("Login successful")
}else{
    console.log("Invalid username and password")
}


// Switch case or condition 


let day = "Monday"  // declared value 
switch(day) { // parameters

    case "Monday":
        console.log("start of a week")
        break;
    
    case "Friday" :
        console.log("Weekend is near")
        break;
        
    case "sunday" :
        console.log("Weekend")
        break;

    default:
        console.log("Regular Day")
        break;
}