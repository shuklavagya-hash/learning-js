//ARRAY

let fruits= ["apple","mango","banana"] 
// square brackets not curly braces

// Basic access
console.log(fruits[0])        // apple
console.log(fruits.length)    // 3

// Add/Remove
fruits.push("grapes") 
console.log(fruits)        // end mein add
fruits.pop()               // end se remove
console.log(fruits)        // ["apple","mango","banana"] 

// MAP - har item ko transform karo (React mein SABSE zyada use)
let upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log(upperFruits)   //poori array uppercase mei print krdi

// FILTER - sirf kuch items chahiye
let marks = [45, 82, 29, 67, 91, 33, 55]
let passed = marks.filter(mark => mark >= 33)
//jinke marks 33 se zyada hain bas wo pass 
console.log("Passed:", passed)
//[45,82,67,33,55]

// FIND - pehla matching item
let firstTopper = marks.find(mark => mark > 80)
console.log("First topper:", firstTopper)
//as soon as pehla matching item milega show kr dega 
// First topper: 82
