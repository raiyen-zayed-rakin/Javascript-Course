const todoList = [];

function addTodo(){
  const inputELement = document.querySelector('.js-name-input');
  const name = inputELement.value;

  todoList.push(name);
  console.log(todoList);
  inputELement.value = '';
}

const todoList2 = [];

function addTodo2(){
  const inputELement = document.querySelector('.js-name-input2');
  const name = inputELement.value;

  for(let i = 0; i<todoList2.length; i++){
  todoList2.push(name);
  document.querySelector('.js-result').innerHTML = name;
  todoList2.pop(name);
  }
  inputELement.value = '';
}