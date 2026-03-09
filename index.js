let country = "Rwanda"   // global variable(scope)  is also in a hosting area

function DisplayCountry() {
    console.log(country)
}

DisplayCountry()


function greetings() {
    let name = "John"  // functional Scope (local variable)
    console.log("Hello " + name)   
}

greetings()


if (true) {
    let age = 20; // block scope
    console.log("My age is " + age)
}




// redeclaration and updating 

var name2 = "John"
var name2 = "Jane"
console.log(name2)

 let name3 = "John3"
 name3 = "Jane4"
 console.log(name3)


 const name4 = "John5"
//  name4 = "Jane5"
 console.log(name4)



// Two symbols with the same description are still unique
const symbol1 = Symbol('description');
const symbol2 = Symbol('description');



console.log(symbol1 === symbol2); // Output: false

