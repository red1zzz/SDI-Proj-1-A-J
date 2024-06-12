document.addEventListener("DOMContentLoaded", () => {
  var toDoListElement = document.getElementById("todo-list");
  var addToDoButton = document.getElementById("add-todo-btn");

  const btn = document.getElementById("add-todo-btn");
  const todoInput = document.getElementById("todo-input");

  var todoText = "";

  todoInput.addEventListener("input", (e) => {
    todoText = e.currentTarget.value;
  });

  btn.addEventListener("click", () => {
    var liElement = document.createElement("li");
    var removeButton = document.createElement("button");
    var spanEl = document.createElement("span");

    removeButton.classList.add("delete");
    removeButton.classList.add("is-small");

    spanEl.innerText = todoText;
    liElement.appendChild(spanEl);
    liElement.appendChild(removeButton);

    removeButton.addEventListener("click", deleteItem);
    liElement.addEventListener("click", strikethrough);

    toDoListElement.appendChild(liElement);

    todoInput.value = "";

  });

  var deleteItem = (e) => {
    const liElement = e.target.parentElement;
    toDoListElement.removeChild(liElement);

  }

  function strikethrough(e) {
    const liElement = e.currentTarget;

    if (liElement.classList.contains("done")) {
      liElement.classList.remove("done");
    } else {
      liElement.classList.add("done");
    }
  }
});