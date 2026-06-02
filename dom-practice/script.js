const heading = document.getElementById("heading")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.addEventListener("click", () => {
    output.textContent = "Button click ho gaya!"
    heading.style.color = "blue"
})
let clickCount = 0

btn.addEventListener("click", () => {
    clickCount++
    output.textContent = "Button " + clickCount + " baar click hua!"
    
    if (clickCount >= 3) {
        heading.textContent = "Bahut click kar liya!"
        heading.style.color = "red"
    }
})