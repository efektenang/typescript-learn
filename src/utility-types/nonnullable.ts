type OriginalType = string | null; 
  

type NonNullableType = NonNullable<OriginalType>; 
  
const value1: NonNullableType = "GeeksforGeeks"; // Valid 
let value2: NonNullableType = undefined // Error: Type 'undefined' is not assignable to type 'string'.
console.log(value2)