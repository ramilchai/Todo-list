//Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners 
todoButton.addEventListener("click", addTodo);
//Funstions

function addTodo(event){
    
    event.preventDefault();
    //What we want is:
    //  <div class="todo">
    //          <li></li>
    //          <button></button>
    //          <button></button>
    //  </div>

    //Create DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Create Mark BUTTON 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
   
    //Create trash BUTTON 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND to LIST
    todoList.appendChild(todoDiv);

    //Clear Todo input
    todoInput.value = "";
}