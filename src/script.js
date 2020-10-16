todos = JSON.parse(localStorage.todos) ||  []            // start with old todos or blank 
let flag = false;            // default iscompleted for todo

// let newt = {
//   id:1,
//   title :'input' , 
//   time : new Date().getTime(),
//   isCompleted :  Math.random() >= Math.random(),
// }
// let newt2 = {
//   id:2,
//   title :'input' , 
//   time : new Date().getTime(),
//   isCompleted :  Math.random() <= Math.random(),
// }

// for(let i=1 ; i<2 ; i++){
//   todos.push(newt)
//   todos.push(newt2)
// }

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

//added enter key listener to input
document.querySelector('.todoinput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addnewTodo()
  }
});


document.getElementById('addbtn').addEventListener('click' , addnewTodo )
function addnewTodo(){
  let input = document.querySelector('.todoinput').value;
  console.log(input)
  if(input==='')
    alert('Come on!')
  else{
    let newt = {
      id: Math.floor(Math.random()*1000%999),
      title :input , 
      time : new Date().getTime(),
      isCompleted : flag,
    }
    todos.unshift(newt)
  }
  document.querySelector('.todoinput').value=""
  console.log(todos)
  savetoLocalStorage()
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function savetoLocalStorage(){
  localStorage.setItem('todos' , JSON.stringify(todos))
  console.log(localStorage)
  console.log("Saved to LS! :]")
}

////////////////////////////////////////////////////////////////////////////////////////

function done(e){
  let btn = e.target
  let id = btn.parentElement.id
  todos.forEach(todo =>{
    if(todo.id==id){
      todo.isCompleted=!todo.isCompleted;
    }
  });
  savetoLocalStorage()
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function delTodo(e){
  let id = e.target.parentElement.id
  // higher order array funtion for returning array based on condition
  todos = todos.filter(function( obj ) {
    return obj.id != id;
  });
  console.log(todos)
  savetoLocalStorage()
  renderTodos()
}


function doneornot(){
  let dones = document.querySelectorAll('.true')
  dones.forEach(done => {
    done.innerHTML = "Completed✅";
    // done.disabled=true;
    done.setAttribute('style' , 'background:green')
  })
  let dones2 = document.querySelectorAll('.false')
  dones2.forEach(done => {
    done.innerHTML = "Incomplete❌";
  })
}

// for fun 
// document.querySelector('body').addEventListener('mousemove' , animate);
// function animate(e){
//   // console.log(e.screenX + " " + e.screenY )
//   let body = document.querySelector('body')
//   body.setAttribute('style' , `background:rgb(${e.screenY%255} , ${e.screenX%244} ,${(e.screenY+99)%255})`)
// }

