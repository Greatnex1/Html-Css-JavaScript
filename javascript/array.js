
let arr = [1,3,4,7,68, -3, -18, -45]

const mappedArra = arr.map((curr, index,array) => curr * index);
const filteredArr = arr.filter((curr,index,array) => curr > 0);

console.log(filteredArr);


const reduceFunc = (acc,item) => {
    if (item > 0)acc.positives +=(item);
    else acc.negatives += (item)
    return acc;
}

const summer = arr.reduce(reduceFunc,{positives:[], negatives:[]})
const sum = arr.reduce(reduceFunc,{psitive:0, negatives:0})

const reduceMap = arr.reduce((acc,item) => {acc.push(item * 2)
    return acc;}, [])


    const names = ["Noah","Bisi", "Ore" ]
    console.log(names.find((curr,index, array)=> curr.endsWith('r')))
    console.log(names.find((curr,index, array)=> curr.startsWith('o')))


    const compareFunc = (a,b) =>{
        if (a>b) return 1
        if (a<b) return -1

    }
    console.log(arr.sort(compareFunc))







// const mappedArr = arr.map((val, index) => val * index);
// console.log(mappedArr);

// const product = arr.reduce((acc, val) => {
//   acc.push(val * 2);
//   return acc;
// }, []);
// console.log(product)
// const maxVal = arr.reduce((acc, val) => {
//   val > acc ? (acc = val) : acc;
//   return acc;
// }, 0);

// console.log(maxVal); 



