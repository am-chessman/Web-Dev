const todoList = [ {
        name: 'make dinner',
        dueDate: '2022-12-22'
    },
    {
        name: 'wash dishes',
        dueDate: '2022-12-22'
    }
];

function renderTodoList(){
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
                <div>${name}</div>
                <div>${dueDate}</div> 
                <button class="delete-todo" onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>`
        todoListHTML += html
    }

    document.querySelector('.todo-list').innerHTML = todoListHTML
}

function addTodo(){
    const inputElement = document.querySelector('.todo-entry');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input')

    const dueDate = dateInputElement.value

    todoList.push ({
        name,
        dueDate
    })

    inputElement.value = ''

    renderTodoList()
}


