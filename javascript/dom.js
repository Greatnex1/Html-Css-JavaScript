/*//Single Element
document.getElementById('my-form')

//Multiple Element
console.log(document.querySelectorAll(".item"));

//adding to html dynamiclly
const ul = document.querySelector('.items')
ul.lastElementChild.textContent='Mango';

//styling
const btn = document.querySelector('.btn')
btn.style.color = 'white'



const btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('click');
})*/

const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');
//nameInput.addEventListener('click',(e)=>{
  //  console.log(nameInput);
//})

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
   e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);

    if(nameInput.value ===" "|| emailInput.value ===" "){
        msg.classList.add('error')
        msg.innerHTML= 'Pls enter all fields'


    }
    else{
    const li =document.createElement('li')
    li.appendChild(document.createTextNode(
        `${nameInput.value}: ${emailInput.value}`
    ))
    userList.appendChild(li)

    
    
}
}