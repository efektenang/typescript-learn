// type OriginalFunctionType = (this: { message: string }, name: string) => void; 
  
// type NewFunctionType = OmitThisParameter<OriginalFunctionType>; 
  
function toHex(this: Number) { 
    return this.toString(16)
}; 

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)

  
// Outputs: "Hello, GeeksforGeeks!" 
console.log(fiveToHex())