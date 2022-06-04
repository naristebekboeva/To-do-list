window.addEventListener("load", () => {
    const form = document.querySelector(".form");
    const inputTodo = document.querySelector("#input-todo");
    const btn = document.querySelector(".btn");
    const todoList = document.querySelector(".todo-list");
  
    form.addEventListener("submit", (item) => {
      item.preventDefault();
    });
  
    btn.addEventListener("click", () => {
      if (inputTodo.value === "") alert("Please add a task!!!");
      else {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoList.append(todoItem);
        todoItem.innerText = inputTodo.value;
        inputTodo.value = "";
        todoItem.addEventListener("click", () => {
          todoItem.remove();
        });
      }
    });
  });
