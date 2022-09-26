const points = [400,200,100,50,35,250]
 document.getElementById("demo").innerHTML = points;

function myFunction1() {
    points.sort()
    document.getElementById("demo").innerHTML = points;
}

function functional() {
    points.sort(function(a,b){return a-b})
    document.getElementById("demo").innerHTML = points;
}