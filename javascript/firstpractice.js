console.log("From exernal script");

let age = 21;

if(age >= 18){

    console.log("You can campaign for Peter Obi")

}
 
   else{ 
    
    console.log("Kindly mind your buisness")

   };
   let status;
   if (age>=18)status = "Major"
   else status = "Minor"
console.log(status)
 

   let staus =   age >=18 ? "Major"  : "Minor";
   console.log(status)

   let partyman = `He is a ${age >= 18? "Major":"Minor"}, He can ${age >=18 ? "" : "not "}vote`;
 console.log(partyman)

 let day=""
 switch(day){
    case "Monday" :
    case "Tuesday" :
        console.log("It's a weekday")
        break;
        case "Saturday" :
    case "Sunday" :
        console.log("It's a weekend enjoy!")
        break;
        default:
            console.log("No be only you kill Jesus")

    // nullish coalesces -?? packs undefined and null
 }