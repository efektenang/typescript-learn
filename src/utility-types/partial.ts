interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate}
}

const todo1 = {
    title: "Lorem ipsum",
    description: "lorem ipsum dolor amet"
}

const todo2 = updateTodo(todo1, {
    title: "Lorem ipsum 1"
})

console.log(todo1)