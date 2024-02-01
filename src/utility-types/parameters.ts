declare function f1(arg: {
    a: number; 
    b: string
}): void

type T0 = Parameters<() => string>

type T1 = Parameters<(s: string) => void>;

const a: T0 = []
const b: T1 = ['arizky']

console.log(b)