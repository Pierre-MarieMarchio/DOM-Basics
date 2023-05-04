// Basic js

alert("Hello World!");

// basic DOM manipulation
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Hello World!";

// DOM manipulation

document.getElementsByTagName("li")[2].style.color = "red";
document.getElementsByClassName("btn")[0].style.color = "red";
document.getElementById("title").innerHTML = "Good By!";

// DOM querry manipulation

document.querySelector("h1").style.color = "white";
document.querySelector("#title").style.background = "black";
document.querySelector("#list a").style.color = "green"; 

document.querySelectorAll("#list .item")[1].style.color = "blue";
document.querySelectorAll("#list .item")[2].style.color = "blue";