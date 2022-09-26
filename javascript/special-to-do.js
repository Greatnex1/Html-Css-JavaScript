

function addItem(){
    var newItem =  document.createElement("div")
    newItem.innerHTML= document.getElementById("box").value;
    document.getElementById("list").appendChild(newItem);
  
   // document.getElementById("container").innerHTML = "Item to Remember"
  //  alert("Remembr to eat by 6pm")
   
}