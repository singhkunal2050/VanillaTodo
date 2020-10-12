document.getElementById('addbtn').addEventListener('click' , addnewTodo )

function addnewTodo(){
  console.log('adding new')

  let todo = document.createElement('div')
  todo.innerHTML= "this is  mew"
  let tododetails = document.createElement('p')
  let todotime = document.createElement('p')
  let donebtn = document.createElement('button')
  let delbtn = document.createElement('button')

  document.body.appendChild(todo)

}

document.getElementsByClassName('donebtn')[0].addEventListener('click' , done )

function done(){
  console.log('done')
}

document.getElementsByClassName('delbtn')[0].addEventListener('click' , delTodo )

function delTodo(){
  console.log('deleting')
}




