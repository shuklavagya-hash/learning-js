//TOPIC: OBJECTS 

const student = {
    name: "Vagya",
    college: "JIIT",
    age: 19,
    isStudent: true
}

// Access karna
console.log(student.name)
console.log(student.college)

// Value change karna
student.age = 20
console.log(student.age)

// Naya property add karna
student.cgpa = 8.5
console.log(student)

// ARRAY OF OBJECTS
const students = [
    { name: "Vagya", marks: 85 },
    { name: "Rahul", marks: 29 },
    { name: "Priya", marks: 67 }
]

// Sab print karo
students.forEach(student => {
    console.log(student.name, "-", student.marks >= 33 ? "Pass" : "Fail")
})