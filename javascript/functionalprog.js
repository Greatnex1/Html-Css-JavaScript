// Pure Function

const timesTwo = (x) => x*2;
timesTwo(2)
console.log(timesTwo(2))

// Immutability
//  An array that collets only five items
const threeArray= ["One", "Two", "Three" ]
const fiveArray = Object.assign([...threeArray], {3:"Four" }, {4:"Five"});
console.log(fiveArray)

// An array that collects only three items
const arrayThree = ["Book", "Laptop"]
const items = Object.assign([...arrayThree], {2:"Apple"})
console.log(items)
// OR
arrayThree.push("Apple")
console.log(arrayThree)


const arr = ["Ayo", "Bisi", "Bolu"];
// describing how a program operates(imperative) i.e allows the code to figure out on its own how it should present itself
for(let i = 0; arr.length > i; i++){
    console.log(arr[i])
}

// showing how a program should work (Declarative) i.e uses code to figure out how to navigate through the data
arr.map((value, index,arr ) =>
console.log(value)
) 
