const userText = document.querySelector(".todo-input");
const userButton = document.querySelector(".todo-button");
const userNewList = document.querySelector(".deedee-list");

userButton.addEventListener("click", addList);
userNewList.addEventListener("click", deleteListDone);

function addList(event) {
    event.preventDefault();

    const newDiv = document.createElement("div");
    newDiv.classList.add("deedee-todo");

    const newList = document.createElement("li");
    newList.innerText = userText.value;
    newList.classList.add("deedee-todo-item");
    newDiv.appendChild(newList);

    const newButton = document.createElement("button");
    newButton.innerHTML = "<i class='fas fa-check'></i>";
    newButton.classList.add("new-button");
    newDiv.appendChild(newButton);

    const newTrash = document.createElement("button");
    newTrash.innerHTML = "<i class='fas fa-trash'></i>";
    newTrash.classList.add("new-trash");
    newDiv.appendChild(newTrash);

    userNewList.appendChild(newDiv);

    userText.value = "";
}

function deleteListDone(event) {
    const item = event.target;
    if (item.classList[0] == "new-trash") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] == "new-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }    
}