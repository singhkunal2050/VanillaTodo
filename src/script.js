let todos = localStorage.todos === undefined ? [] : JSON.parse(localStorage.todos) // start with old todos or blank 
let flag = false; // default iscompleted for todo

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

function renderTodos() {
  let list = document.querySelector('.todolist')
  list.innerHTML = ""

  // sorting incomplete todos firts 
  todos.sort(function (x, y) {
    // false values first
    return (x.isCompleted === y.isCompleted) ? 0 : x.isCompleted ? 1 : -1;
  });

  todos.forEach(todo => {
    if (todo.isCompleted === true)
      list.innerHTML = list.innerHTML + `<div class="todo completed" id=${todo.id}><p class="tododetails inverted"> ${todo.title} </p><p class="todotime">${todo.time}</p><button class="donebtn ${todo.isCompleted}" >Incomplete</button><button class="delbtn" >Delete <span class="mdi mdi-delete" style="font-size:1.2em"></span></button></div>`
    else
      list.innerHTML = list.innerHTML + `<div class="todo incomplete" id=${todo.id}><p class="tododetails inverted"> ${todo.title} </p><p class="todotime">${todo.time}</p><button class="donebtn ${todo.isCompleted}" >Incomplete</button><button class="delbtn" >Delete <span class="mdi mdi-delete" style="font-size:1.2em"></span></button></div>`
  });
  //checks if todos are complete or not
  doneornot()

  //listning all btns
  todos.length > 0 ? document.querySelectorAll('.donebtn').forEach(dbtn => {
    dbtn.addEventListener('click', done)
  }) : list.innerHTML = '<h2 style="text-align:center; margin-top:20px">No Todos Added  <span class="inverted">😔</span> </h2>';

  todos.length > 0 ? document.querySelectorAll('.delbtn').forEach(delbtn => {
    delbtn.addEventListener('click', delTodo)
  }) : null;

}

//added enter key listener to input
document.querySelector('.todoinput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addnewTodo()
  }
});


document.getElementById('addbtn').addEventListener('click', addnewTodo)

function addnewTodo() {
  let input = document.querySelector('.todoinput').value;
  console.log(input)
  if (input === '')
    swal("Come on!", "You gotta type!");
  else {
    let newt = {
      id: Math.floor(Math.random() * 1000 % 999),
      title: input,
      time: new Date().toLocaleTimeString(),
      isCompleted: flag,
    }
    todos.unshift(newt)
  }
  document.querySelector('.todoinput').value = ""
  console.log(todos)
  savetoLocalStorage()
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function savetoLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos))
  console.log(localStorage)
  console.log("Saved to LS! :]")
}

////////////////////////////////////////////////////////////////////////////////////////

function done(e) {
  let btn = e.target
  let id = btn.parentElement.id
  todos.forEach(todo => {
    if (todo.id == id) {
      todo.isCompleted = !todo.isCompleted;
    }
  });
  savetoLocalStorage()
  renderTodos()
}

////////////////////////////////////////////////////////////////////////////////////////

function delTodo(e) {
  let id = e.target.parentElement.id
  // higher order array funtion for returning array based on condition
  todos = todos.filter(function (obj) {
    return obj.id != id;
  });
  console.log(todos)
  savetoLocalStorage()
  renderTodos()
}


function doneornot() {
  let dones = document.querySelectorAll('.true')
  dones.forEach(done => {
    done.innerHTML = 'Completed<span class="inverted"> ✅</span>';
    // done.disabled=true;
    done.setAttribute('style', 'background:#177148')
  })
  let dones2 = document.querySelectorAll('.false')
  dones2.forEach(done => {
    done.innerHTML = 'Incomplete<span class="inverted"> ❌<span>';
  })
}

// for fun 
// document.querySelector('body').addEventListener('mousemove' , animate);
// function animate(e){
//   // console.log(e.screenX + " " + e.screenY )
//   let body = document.querySelector('body')
//   body.setAttribute('style' , `background:rgb(${e.screenY%255} , ${e.screenX%244} ,${(e.screenY+99)%255})`)
// }

//////////////////////////////////////////////////////////////////////


//delete all todos from localstorage

document.getElementById('cleartodo').addEventListener('click', () => {
  if (todos.length === 0) {
    swal('NO TODOS TO DELETE 🌚!')
  } else {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the todos!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear()
        todos = []
        swal("All todos deleted!", {
          icon: "success",
        });
        renderTodos();
      } else {
        swal("Nothing Deleted!");
      }
    });
  }
})

//////////////////////////////////////////////////////////////////////


//download all todos from localstorage

document.getElementById('dwnld').addEventListener('click', () => {
  if (todos.length === 0) {
    swal('NO TODOS TO DOWNLOAD 🌚!')
  } else {
    str = "\n\n-----------------------------TODOS1.0.0-----------------------------------\n\n"
    todos.forEach(todo => {
      const {
        title,
        time,
        isCompleted
      } = todo
      str = str + ` TITLE :: ${title} \n TIME :: ${time} \n COMPLETED :: ${isCompleted} \n------------------------------------------------------------------------------\n`
    })
    var dataStr = "data:text/txt;charset=utf-8," + encodeURIComponent(str);
    var dlAnchorElem = document.getElementById('dwnld');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `todos_${Math.floor(Math.random()*1000%9999)}.txt`);
  }
});

//////////////////////////////////////////////////////////////////////


//adding dark mode 
document.querySelector('#nightmode-toggle').addEventListener('click', nighToggle )
function nighToggle() {
  document.documentElement.classList.toggle('dark-mode')
  document.querySelectorAll('.inverted').forEach((result) => {
    result.classList.toggle('invert')
  });
}




// add download todos option ✔✔
// make best ui
// add sorting of todos completed at last
// add confirmation to delete all
// add a copy todo option with each todo 
// latest windows 10 has emojis with WINDOWS + . shortcut 😊😊
// add search option 
// once all todos are completed give a visual animation to celebrate 
// only valid if the todos are more than 3
// night mode


// Website :: https://vanillatodoo.netlify.app/

// # Features 

// - Adding  todos
// - Persistent with Local Storage
// - Delete all in one click
// - Download todo in .txt format 
// - fully responsive for all devices 
// - sorts incomplete tasks to top for better accessibility


// # For Future Release

// - top notch UI 
// - add a copy todo option with each todo
// - add search todo option
// - once all todos are completed give a visual animation to celebrate [only valid if the todos are more than 3]