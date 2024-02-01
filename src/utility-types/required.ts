interface Person {
    name?: string;
    age?: number;
    address?: string
}

// is valid
const person1: Person = {
    name: 'Muhammad Arizky'
}

// Error: Type {name: string} is missing the following properties from type 'Required<Person>': age, address
const person2: Required<Person> = {
    name: "Arizky"
}

console.log(person1)