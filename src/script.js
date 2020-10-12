document.getElementById('addbtn').addEventListener('click' , addnewTodo )

function addnewTodo(){
  console.log('adding new')

  let todo = document.createElement('div')
  todo.classList.add("todo");
  todo.innerHTML= ' <p class="tododetails">This is the new todo</p><p class="todotime">05:30 PM</p><button class="donebtn">Completed</button><button class="delbtn">Delete </button>'
  // let tododetails = document.createElement('p')
  // let todotime = document.createElement('p')
  // let donebtn = document.createElement('button')
  // let delbtn = document.createElement('button')

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




