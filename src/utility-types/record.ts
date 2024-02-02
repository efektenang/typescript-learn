interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "Moly" | "Milo" | "Oreo"

// CatName: represent the type of keys in the dictionary, 
// CatInfo:  represent the type of the values.
const cats: Record<CatName, CatInfo> = {
    "Moly": {
        age: 2,
        breed: "persian"
    },
    "Milo": {
        age: 3,
        breed: "British Shorthair"
    },
    "Oreo": {
        age: 5,
        breed: "Maine Coon"
    },
}

console.log(cats)