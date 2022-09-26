
const something = "anything";
const user = {
    "name" : "Ayo",
    "age" : 25,
    "is married": true,
    [something]:"Pizza",
    shoot(){
       
      console.log("Shooter", this.name);
    },
    talk: () =>{
        console.log("talking", )
    }
}

console.log(user)
console.log(user.name)
console.log(user["age"])
console.log(user.talk())
console.log(user.shoot())

// for(let key in user){
//     console.log(`${key} : ${user[key]}`)
// }
function opt(a,b,func){
    return(a+b)


}
console.log(opt(6,7))

