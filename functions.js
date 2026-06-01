//FUNCTIONS

//with no return value
function Name(name)
{
    console.log("Hello ",name)
}
Name("abc")
Name("vagya")

// Function jo kuch return kare
function add(a, b) 
{
    return a + b
}

let result = add(10, 5) //variable mei aise store kr skte
console.log("Sum:", result)
console.log("Direct:", add(3, 7))

// Real use - pass/fail check
function checkResult(marks) {
    if (marks >= 33) {
        return "Pass"
    } else {
        return "Fail"
    }
}

console.log(checkResult(75))
console.log(checkResult(20))
console.log(checkResult(33))

//ARROW FUNCTIONS

// ARROW FUNCTIONS - modern JS syntax
// Purana tarika:
function multiply(a, b) {
    return a * b
}

// Naya tarika - arrow function:
const multiplyArrow = (a, b) => {return a * b}

// one liner version:
const multiplyShort = (a, b) => a * b

console.log(multiply(3, 4))
console.log(multiplyArrow(3, 4))
console.log(multiplyShort(3, 4))

// Single parameter mein brackets bhi optional:
const double = n => n * 2 //to double the value of a number
console.log(double(5))
console.log(double(10))
