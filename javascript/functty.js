

// console.log("Immiediately invoked Function Expression");

// // Initializatioin of IIFE
// const word =(function() {
//     console.log("I am IIFE")

//     return{
//         name : "Ayo",
//         age:21,
//         language(){
//             console.log(" I speak Yoruba");
//         }
//     }
// }) ()

// function fun (){


// try {
//     // return 5;
// throw new Error("This progam can't load")
    
// } catch (error) {
//     console.log(error.message);
//     document.querySelector("body").insertAdjacentText("beforeend", `Done with the function`)
// }

// finally{
//  console.log("Always run");
// }

// }
// console.log(fun());

// const body = document.querySelector("body")
// const img = document.createElement("img")

// // asycaweit
// img.src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// // img.src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// // // img.src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// img.addEventListener("load",() => console.log("Now loaded"))
// body.appendChild(img)
// // body.appendChild(img1)
// console.log("Image loading");



// getting api
 const url ='https://randomuser.me/api/?results=10'
fetch(url).then((res) =>res.json())
 .then((data) => console.log(data))
// //  const url ='https://randomuser.me/api/?results=10'

  const container = document.querySelector(".container")

fetch(url).then((res) =>res.json())
 //if(!res.ok)throw new Error ("something went wrong");
 //return res.json()
.then((data) => {
    data.results.forEach((result)=>{
      const{last,first,title} =result.name;

        container.insertAdjacentHTML("beforeend",
 `<section class="user">
       <img src="${result.picture.medium}" alt="">
       <p>${title} ${first} ${last} </p>
       <p> ${index + 1}</p>
        </section>`
        )
   })
 
})
 const fetchRandomUser = async () =>{
try{

    const response =await fetch('https://randomuser.me/api/?results=10');
const data = await response.json()
    data.results.forEach((result)=>{
        const{last,first,title} =result.name;

        container.insertAdjacentHTML("beforeend", `<section class="user">
       <img src="${result.picture.large}" alt="">
       <p>${title} ${first} ${last} </p>
    
        </section>`
        )
     
    });
    return " I love Miss"
}catch (error)    {
    console.log(error.message);
}
 }
// top level await
const variable = await fetchRandomUser()
// console.log(variable);
//  Promise.