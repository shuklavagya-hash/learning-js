const input = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")

addBtn.addEventListener("click", () => {
    const todoText = input.value  //jo bhi input karenge wo yahan store hoga
    
    if (todoText === "") return  // empty input check
    
    const li = document.createElement("li")  //new list element
    li.textContent = todoText  //add karenge yahan se 
    
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "ml-2 text-red-400 hover:text-red-600 font-bold"
    deleteBtn.textContent = "Delete"  //naya button banaya jispr delete likha hai
    deleteBtn.addEventListener("click", () => {  //if delete button is clicked usko item ko hata do
        todoList.removeChild(li)   
    })
    
    li.appendChild(deleteBtn)  //har item k sath ek delete button add kr diya li mei
    todoList.appendChild(li)
    input.value = ""
})