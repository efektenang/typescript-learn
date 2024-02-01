interface MyTodo {
    title: string;
    desc: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<MyTodo, "desc">

const todo: TodoPreview = {
    title: "Learning utility types",
    completed: true,
    createdAt: 1615544252770
}

console.log(todo);