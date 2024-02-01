type Animal = "cat" | "dog" | "fish" | "bird"

type Mammal = Extract<Animal, "cat" | "dog">

let myPet: Mammal

const mammals: Mammal[] = ['cat', 'dog']

for (const mammal of mammals) {
    console.log(mammal)
}