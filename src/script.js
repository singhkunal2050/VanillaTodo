document.getElementById('addbtn').addEventListener('click' , addnewTodo )

function addnewTodo(){
  console.log('adding new')
  var d = new Date();
  let todo = document.createElement('div')
  let todotitle = document.getElementsByClassName('todoinput')[0].value
  let todotime =   d.getHours() + ":" + d.getMinutes(); 
  
  todo.classList.add("todo");
  todo.innerHTML= ' <p class="tododetails">'+ todotitle +'</p><p class="todotime">'+ todotime + '</p><button class="donebtn">Completed</button><button class="delbtn">Delete </button>'
  document.getElementsByClassName('todolist')[0].appendChild(todo)
}

document.getElementsByClassName('donebtn')[0].addEventListener('click' , done )

function done(){
  console.log('done')
}

document.getElementsByClassName('delbtn')[0].addEventListener('click' , delTodo )

function delTodo(){
  console.log('deleting')
}




