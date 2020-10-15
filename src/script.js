todos = []
let flag = false;

// let newt = {
//   title :'input' , 
//   time : new Date().getTime(),
//   isCompleted : false,
// }

// for(let i=0 ; i<4 ; i++)
//   todos.push(newt)


function renderTodos(){
  let list = document.querySelector('.todolist')
  list.innerHTML=""
  todos.forEach(todo => {
    list.innerHTML= list.innerHTML + `<div class="todo"><p class="tododetails"> ${todo.title} </p><p class="todotime">${todo.time}</p><button class="donebtn ${todo.isCompleted}">Incomplete</button><button class="delbtn">Delete</button></div>`
  });

  //checks if todos are complete or not
  doneornot()

}


document.getElementById('addbtn').addEventListener('click' , addnewTodo )
function addnewTodo(){
  let input = document.querySelector('.todoinput').value;
  flag= !flag
  console.log(input)
  if(input==='')
    alert('Come on!')
  else{
    let newt = {
      title :input , 
      time : new Date().getTime(),
      isCompleted : !flag,
    }
    todos.push(newt)
  }
  document.querySelector('.todoinput').value=""
  console.log(todos)
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function savetoLocalStorage(todolist){
  localStorage.setItem('todos' , todolist);
  console.log(localStorage)
}

////////////////////////////////////////////////////////////////////////////////////////


document.getElementsByClassName('donebtn')[0].addEventListener('click' , done )
function done(){
  console.log('done')
}

////////////////////////////////////////////////////////////////////////////////////////

document.getElementsByClassName('delbtn')[0].addEventListener('click' , delTodo )
function delTodo(){
  console.log('deleting')
}


function doneornot(){
  let dones = document.querySelectorAll('.true')
  dones.forEach(done => {
    done.innerHTML = "Completed✅";
  })
}

