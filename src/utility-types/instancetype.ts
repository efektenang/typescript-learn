class PersonalIdentity {
    constructor(public name: string, public age: number) {}
}

type PersonInstance = InstanceType<typeof PersonalIdentity>

const person: PersonInstance = new PersonalIdentity('Muhammad Arizky', 23)

console.log(person);