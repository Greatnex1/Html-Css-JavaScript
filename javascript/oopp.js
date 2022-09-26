/* 
Inheritance allows reusing of codes without rewriting it
Composition allows the recreation of objects inside a class and using them directly without needing inheritance
*/

// creating a Robot class
// class Robot{
    
//     constructor(name,type){
//         this.name = name;
//         this.type= type;
//         this.greeting = function (){
//             return "I'm " + this.name + "" + " I'm a/an " + this.type + ".";
//         }
//     }
// }

// class BendingUnit extends Robot{

//     constructor(name,type){
//         super(name,type);
//     }
// }
//Creating a class that extends functiions from a parent class

// class BendingUnit extends Robot{

//     constructor(name,type){
//         super(name,type);
//     }
//     primaryFunction(){

// console.log(this.name + " bends things");
//     }
// }


// Creating the Robot object using function constructors

const Robot = function(name,type){
    this.name= name;
    this.type = type;
}
Robot.prototype.greeting = function(){
    return "I'm " + this.name + "" + " I'm a/an " + this.type + "."
}

const BendingUnit = function(){
    Robot.apply(this,arguments)
}
BendingUnit.prototype = Object.create(Robot.prototype)
BendingUnit.prototype.constructor = BendingUnit;