document.addEventListener("DOMContentLoaded",() => {
    var toDos = [
    {done:false, text:"display todos to user"},
    {done: false, text:"allow user to add a todo"},
    {done: false, text:"allow user to mark as completed"},
    {done: false, text: "allow user to remove a to-do task"},
    {done: false, text: "style"}
    ];
    var toDoListElement = document.querySelector("#todo-list")
    toDos.map((todo) =>{
        var li = document.createElement("li")
        li.innerHTML = todo.text
        toDoListElement.appendChild(li)
    }) 
}) 
