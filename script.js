const h2 = document.createElement("h2");
h2.textContent = "Tis a work in progress!";

document.querySelector("body").appendChild(h2);


document.getElementById("h2").onmouseover = function() {mouseOver()};
document.getElementById("h2").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("h2").style.color = "red";
}

function mouseOut() {
  document.getElementById("h2").style.color = "black";
}