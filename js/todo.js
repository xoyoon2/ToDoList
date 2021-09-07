const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function createTodo(newToDoText) {
  const toDo = document.createElement("li");
  const text = document.createElement("span");
  text.innerText = newToDoText;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(toDo);
  toDo.appendChild(text);
  toDo.appendChild(button);
  return toDo;
}

function deleteToDo(event) {
  const toDoText = event.path[1].querySelector("span").innerText;
  const localArray = JSON.parse(localStorage.getItem(TODOS_KEY));
  const idx = localArray.indexOf(toDoText);
  const toDosidx = toDos.indexOf(toDoText);
  toDos.splice(toDosidx, 1);
  localArray.splice(idx, 1);
  localStorage.setItem(TODOS_KEY, JSON.stringify(localArray));
  event.path[1].remove();
}

function updateLocalStorage() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDoText = toDoInput.value;
  toDoInput.value = null;
  toDos.push(newToDoText);
  createTodo(newToDoText);
  updateLocalStorage();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function getLocalStorage() {
  if (localStorage.getItem(TODOS_KEY) === null) {
    return;
  }
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const parsedLocalStorage = JSON.parse(localStorage.getItem(TODOS_KEY));
  parsedLocalStorage.forEach((element) => createTodo(element));
}
getLocalStorage();
