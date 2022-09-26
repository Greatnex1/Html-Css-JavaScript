const container = document.querySelector(".container");
// console.log(container);
const closeButton = document.querySelector(".modal > button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")

container.addEventListener("click",onClick)

container.addEventListener('click', (e) => {
    if(!e.target.classList.contains("btn")) return;
        console.dir(e.target);
        modal.classList.remove("hidden")
        overlay.classList.remove("overlay")
})
// const closeButton = document.querySelector(".modal > button");
closeButton.addEventListener("click", (e) => {
    
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
console.log("clicked");

});
// getting the particular key a user presses
document.addEventListener("keydown", (e) =>{
    modal.classList.add("hidden")
    overlay.classList.add("overlay")
    if(e.code !== "Escape")return
    console.log(e)
})

function onClick(e){
    if(!e.target.classList.contains("btn")) return;
    console.dir(e.target);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

overlay.addEventListener("click", (e) => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});