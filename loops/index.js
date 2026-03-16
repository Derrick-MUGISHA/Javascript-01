// for loop 


for (let i = 0; i <= 10; i++){
    console.log(i);
}

// template 

// for (initialize; condition, increment/decrement){
//     // code
// }


for (let i = 1; i <= 20; ++i) {
    if (i % 2 == 0 ) {
        console.log(i); // even numbers
    }
}


// 

let fruits = ["apple", "banana", "orange", "mango", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// a simple countdown

for (let i = 5; i >= 0; i--) {
    console.log(i);
}



// while loop 
// the condition must be true for the loop to run but without the excepted outcomes

// while (condition) {
//     // code
// }




let roll = 0;

while (roll !== 6) {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log("You Rolled: " + roll);
}

console.log("You rolled a six!");



let constant = 1;
while (constant <= 5){
    console.log(constant);
    constant++;
}


let correctPin = 1234
let incorrectPin = 43357

while (incorrectPin !== correctPin) {
    console.log("Incorrect Pin");
    // break
}

console.log("Correct Pin");


