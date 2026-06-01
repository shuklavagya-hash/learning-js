//IF-ELSE LOOPS IN JS
let marks=75;
if (marks>33)
    console.log("pass")
else
    console.log("fail")

//IF-ELSE LADDER

let score = 85

if (score >= 90) {
    console.log("A grade")
} else if (score >= 75) {
    console.log("B grade")
} else if (score >= 33) {
    console.log("Pass")
} else {
    console.log("Fail")
}

// LOGICAL OPERATORS
let age = 20
let hasVoterCard = true

// AND - dono conditions true honi chahiye
if (age >= 18 && hasVoterCard) {
    console.log("Vote kar sakta hai")
} else {
    console.log("Vote nahi kar sakta")
}

// OR - koi ek bhi true ho toh chalega
let hasCash = false
let hasUPI = true

if (hasCash || hasUPI) {
    console.log("Payment ho sakti hai")
} else {
    console.log("Payment nahi hogi")
}