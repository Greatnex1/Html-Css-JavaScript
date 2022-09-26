"use strict";

// console.log(this)

// function namedFunction(){
// //     console.log(arguments)
// //     console.log(this)
// const obj = {
//     name: "William",
   
//     namedFunction(){
       
//         console.log(this.name)

//     },
// };

// console.log(obj.namedFunction());
 
const Person = {
    firstname: "Dorcas",
    lastname: "Adeweh",
    age : 33,
    gender : "F",
    fullname(){
        const getTitle = () =>{

            return this.gender === 'F'? "Mrs." : "Mr "
    
        }
      return `${getTitle()} ${this.lastname} ${this.firstname}`;
},

isMinor(){
    return this.age < 18;
},
};
console.log(Person.fullname())
// str = "Welcome"
// to cut out whitespaces use trim
// to create spaces before the string use padStart
// to create spaces after the string use padEnd

// N:B To run in terminal
const aye =[1,2,3,5,6,89]
// aye.forEach((elem, index, array)=>{
    
//     console.log(elem,index,array)

// });
// const f = aye.filter((item) => item > 5)
// console.log(f)

const mappedArr = aye.map((item, index) => {
    [index]; item * 2 });

console.log(mappedArr);

const reduceArr = aye.reduce((acc,item)=> acc + item);
console.log(reduceArr)
const fruits = ["apple", "pear", "pine-apple", "orange", "cucumber"]

const fruity=fruits.reduce((acc,item) => (acc,length >= item.length ? acc : item))
console.log(fruity)
