// function myCount(evt){
//     console.dirxml(evt);
//     //  console.dir(evt)
//     //  console.count(evt);
// }

// document.addEventListener("DOMContentLoaded",() =>{
// document.querySelector("#myButton").addEventListener("mouseover", myCount)
// });


/* the dir method allows view of all properties and methods displayed for an object, 
including any child properties and methods

the dirxml method displays all the properties and methods of a javascript object
as a tag-based XML document
*/


// using grouo and groupEnd method of the console API


// const inscoAlbums = {
//     'first': 'Information Society', 
//     'second': 'Hack',
//     'third': 'Peace and Love inc',
//     'fourth' : 'Dark and Dirty'
// };

// function groupBand(albums){
//     console.group("Album List");
//     console.log('first:', albums.first);
//     console.log('second :', albums.second);
//     console.log('third :', albums.third);
//     console.log('fourth:', albums.fourth);
//     console.groupEnd()
// }
// document.addEventListener("DOMContentLoaded", () => {
//     groupBand(inscoAlbums)
// });

// using the table method

// let wildAlbums = {
//     'first': 'Information Society', 
//     'second': 'Hack',
//     'third': 'Peace and Love inc',
//     'fourth' : 'Dark and Dirty'
// };

// function groupBand(tracks){
//     console.table(tracks);
//     // console.log('first:', albums.first);
//     // console.log('second :', albums.second);
//     // console.log('third :', albums.third);
//     // console.log('fourth:', albums.fourth);
//     // console.groupEnd()
// }
// document.addEventListener("DOMContentLoaded", () => {
//     groupBand(wildAlbums)
// })

// using the fetch method to return data from a webservice

let jsonResult;

function getData(){
    fetch(`https://jsonplaceholder.typicoce.com/todos/`)
    .then(response => response.json())
    .then(json => saveData(json))
}
function saveData(json){
    jsonResult = json
console.log(jsonResult);
}
document.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#myButton").addEventListener("click",getData())

})