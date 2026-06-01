//LOOPS

// FOR LOOP - jab pata ho kitni baar chalana hai
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i)
}

// REAL USE - ek array ke saare items print karo
let students = ["Vagya", "Rahul", "Priya", "Amit"]

for (let i = 0; i < students.length; i++) {
    console.log("Student:", i+1 ,":", students[i])
}
// CHALLENGE
// Yeh array hai tere paas:
let marks = [45, 82, 29, 67, 91, 33, 55]

// Kaam yeh karna hai:
// Har student ka marks print karo
// Agar marks 33 se kam hai toh "Fail" print karo
// Agar 33 ya zyada hai toh "Pass" print karo

for(let i=0;i<marks.length;i++)
{
    if (marks[i]>=33)
        console.log("Student ",i+1," marks: ", marks[i]," Pass")
    else
        console.log("Student ",i+1," marks: ", marks[i], " Fail")
}