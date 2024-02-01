interface Datadiri {
    name: string;
    age: number;
}

const dataDiri: Readonly<Datadiri> = {
    name: 'Rizky',
    age: 123
}


//  error TS2540: Cannot assign to 'name' because it is a read-only property.
dataDiri.name = 'Muhammad'
console.log(dataDiri)