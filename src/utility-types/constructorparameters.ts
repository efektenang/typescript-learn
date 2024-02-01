class GFG {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    name: string;
    age: number
}

type ConstructorParams = ConstructorParameters<typeof GFG>

function createGFG(...params: ConstructorParams): GFG {
    return new GFG(...params)
}

const GFG1 = createGFG('Rizky', 23)

console.log(GFG1)