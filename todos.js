let todos = []
function getFieldValue(id) {
    return document.getElementById(id).value
}

const notify = (msg, type) => {
    let color = ''
    switch (type) {
        case "success":
            color = "linear-gradient(to right, #1d976c, #93f9b9)"
            break;
        case "error":
            color = "linear-gradient(to right, #ed213a, #93291e)"
            break;
        default:
            color = "#000"
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        }
    }).showToast();
}

const handleCreate = () => {
    let title = getFieldValue("input")
    if (!title) {
        return notify("Enter Todo", "error")
    }
    // console.log(title)

    let date = new Date()
    // console.log(date)
    let id = todos.length + 1
    id = Number(id)
    // console.log(id)



    let todo = {
        title,
        date,
        id,
        // status: true,

    }
    todos.push(todo)
    notify("Todo Created successfully","success")
    console.log(todos)
    // document.getElementById("output").innerText = todos

}

const handleRead = () => {
    // let title = "Title 1"
    // console.log(title)

    // let date = new Date()
    // console.log(date)
    // let id = todos.length + 1
    // console.log(id)



    // let todo = {
    //      title,
    //      date,
    //      id,
    //      isCompleted : false,

    // }
    // todos.push(todo)
    if (!todos) {
        notify("First Create Todos", "error")
    }
    notify("open console" , "error")
    console.log(todos)
    // document.getElementById("output").innerText = todos
}

const handleUpdate = () => {
    let newTitle = getFieldValue("input")
    if (!newTitle) {
        notify("Enter Updated Title", "error")
    }
    let userid = getFieldValue("number")
    userid = Number(userid)
    if (!userid) {
        return notify("Enter the id", "error")
    }
    // console.log(userid)
    // console.log(userid)
    // console.log("todos", todos)
    // console.log("userid", userid)

    const updatedTodos = todos.map((user, i) => {
        if (user.id === userid) {
            return { ...user, title: newTitle }
        } else { return user }
    })
    // console.log(updatedTodos)
    todos = updatedTodos
    notify("A User Hass Been Successfully Updated", "success")
    console.log(todos)
}


const handleDelete = () => {
    let userid = getFieldValue("number")
    userid = Number(userid)
    if (!userid) {
        return notify("Enter the id", "error")
    }
    const filteredTodos = todos.filter(user => user.id !== userid)
    todos = filteredTodos
    notify("A User Has Been Successfully Deleted", "success")
    console.log(todos)
}

const handleTable = () => {
//     let tablestartingcode = '<div class = "table-responsive"> <table class = "table">'
//         let tableendingcode = "</table></div>"
//         let tableheader = "<tr><th>Title</th><th>Description</th><th>Location</th><th>Action</th></tr>"
//         let tablebody = ""
//         for( let i = 0 ; i<todos.length; i++){
//             let todo = todos[i]
//     tablebody += <tr><td>${todo.title}</td><td>${todo.location}</td><td>${todo.description}</td><td><button class="btn btn-danger" data-value="${todo.id}" onclick= "deleteTodo(event)"><i  class = "fas fa-trash-alt"></i>Delete</button><button class="btn btn-primary mx-1 mb-1" data-value="${todo.id}" onclick= "editTodo(event)"><i  class = "fas fa-pen mx-1 mt-1"></i>Edit</button></td></tr>
//         }
        
//         let table = tablestartingcode + tableheader + "</tbody>" + tablebody +  "</tbody>" + tableendingcode
//         document.getElementById("table").innerHTML = table
//     

}