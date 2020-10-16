todos = []
let flag = false;

let newt = {
  id:1,
  title :'input' , 
  time : new Date().getTime(),
  isCompleted :  Math.random() >= Math.random(),
}
let newt2 = {
  id:2,
  title :'input' , 
  time : new Date().getTime(),
  isCompleted :  Math.random() <= Math.random(),
}

for(let i=1 ; i<2 ; i++){
  todos.push(newt)
  todos.push(newt2)
}

function renderTodos(){
  let list = document.querySelector('.todolist')
  list.innerHTML=""
  todos.forEach(todo => {
    if(todo.isCompleted===true)
      list.innerHTML= list.innerHTML + `<div class="todo completed" id=${todo.id}><p class="tododetails"> ${todo.title} </p><p class="todotime">${todo.time}</p><button class="donebtn ${todo.isCompleted}" >Incomplete</button><button class="delbtn" >Delete</button></div>`
    else
      list.innerHTML= list.innerHTML + `<div class="todo incomplete" id=${todo.id}><p class="tododetails"> ${todo.title} </p><p class="todotime">${todo.time}</p><button class="donebtn ${todo.isCompleted}" >Incomplete</button><button class="delbtn" >Delete</button></div>`
  });

  //checks if todos are complete or not
  doneornot()

  //listning all btns
  todos.length>0 ? document.querySelectorAll('.donebtn').forEach(dbtn => {
    dbtn.addEventListener('click' , done)
  }) : null;

  todos.length>0 ? document.querySelectorAll('.delbtn').forEach(delbtn => {
    delbtn.addEventListener('click' , delTodo)
  }) : null;

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

function done(e){
  // gets current todo id 
  let btn = e.target
  // btn.innerHTML = "Completed✅";
  // btn.disabled=true;
  // btn.setAttribute('style' , 'background:green')
 
  let id = btn.parentElement.id
  todos.forEach(todo =>{
    if(todo.id==id){
      todo.isCompleted=true;
    }
  });
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function delTodo(e){
  console.log(e)
  console.log('deleted')
}


function doneornot(){
  let dones = document.querySelectorAll('.true')
  dones.forEach(done => {
    done.innerHTML = "Completed✅";
    done.disabled=true;
    done.setAttribute('style' , 'background:green')
  })

  let dones2 = document.querySelectorAll('.false')
  dones2.forEach(done => {
    done.innerHTML = "Incomplete❌";
  })
}



// for fun 

document.querySelector('body').addEventListener('mousemove' , animate);
function animate(e){
  // console.log(e.screenX + " " + e.screenY )
  let body = document.querySelector('body')
  body.setAttribute('style' , `background:rgb(${e.screenY%255} , ${e.screenX%244} ,${(e.screenY+99)%255})`)
}