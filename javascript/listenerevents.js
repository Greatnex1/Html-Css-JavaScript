// adding an event listener

// document.addEventListener("DOMContentLoaded",onPageLoad);

// function onPageLoad(){
//     let theButton = document.getElementById("myButton");
//     theButton.addEventListener("click",handleButtonclick);

// }

// function  handleButtonclick(){
//     console.log("button clicked");
//     let theButton = document.getElementById("myButton");
//     theButton.removeEventListener("click", handleButtonclick)
// }

// adding multiple events
// document.addEventListener("DOMContentLoaded",onPageLoad);

// function onPageLoad(){
//     let theButton = document.getElementById("myButton");
//     theButton.addEventListener("click",handleButtonclick);
//     theButton.addEventListener("mouseover",mouseOverEvent);
//     theButton.addEventListener("mouseout",mouseOutEvent);

// }
// function handleButtonclick(){
//     console.log("button clicked");
// }

// function mouseOverEvent (){
//     console.log("mouser overed");
// }

// function mouseOutEvent (){
//     console.log("mouseout");
// }

// // finding object that was clicked using preventMethod

// document.addEventListener("DOMContentLoaded",onLink);

// function onLink(){
//     let theButton = document.getElementById("myLink");
//     theButton.addEventListener("click", function(evt){

//         evt.preventDefault();
//         console.log(evt);
//         console.log(evt.target); 
//     })};
 
//     // using the preventMethod with a form

//     document.addEventListener("DOMContentLoaded",onSubmit);

//     function onForm(){
//         let myForm = document.querySelector("form");
//         myForm.addEventListener('submit',onSubmit);
//     }

//     function onSubmit(evt){
//         console.log("form submitted");
//         evt.preventDefault();
//     }

//     // Event Bubbling
//     document.addEventListener("DOMContentLoaded",onPageLoad);

// function onPageLoad(){
//     let theButton = document.getElementById("myButton");
//     theButton.addEventListener("click",onButtonClick);

//     let container = document.getElementById("conainer");
//     container.addEventListener("click",onContainerClick)

//     document.addEventListener("click",onDocumentClick);
//     window.addEventListener("click",onWindowClick)
// }

// function onButtonClick(evt){
//     console.log("button clicked");
// }

// function onContainerClick(evt){
//     console.log("container clicked");
// }

// function onDocumentClick(evt){
//     console.log("document clicked");
// }


// function onWindowClick(evt){
//     console.log("window clicked");
// }

// A custom event i.e creating your own event

function onPageLoad(){
    let theButton = document.getElementById("myButton");
    theButton.addEventListener("click",onButtonClick,true);
    theButton.addEventListener("WORLD_EVENT_CENTER", onWorldEnd);
}

function onButtonClick(evt){
     let custEvent = new CustomEvent("WORLD_EVENT_CENTER",{
        detail: "I feel great"
    });
let myButton = document.getElementById("myButton");
myButton.dispatchEvent(custEvent);

};

function onWorldEnd(evt){
    // prints out the entire event object
     console.log(evt);
    //  prints out the type property of the event object
     console.log(evt.type);
    //  prints out the value of the object sent from the custom event
    console.log(evt.detail);
}