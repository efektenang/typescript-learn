function greet(name:string) {
    return `Hello, ${name}.`
}

type GreetReturn = ReturnType<typeof greet>

const greeting: GreetReturn = greet('Muhammad arizky')

console.log(greeting)