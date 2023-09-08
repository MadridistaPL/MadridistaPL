// --------home--------

let messageArray = ["Future Full-stack Developer"];
let textPosition = 0;
let speed = 200;

typewriter = () => {
  document.querySelector("#animation").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
};

window.addEventListener("load", typewriter);

// --------contact--------

let box = document.querySelector("#contact");

box.firstElementChild.classList.remove("inner");
box.firstElementChild.classList.add("inner2");

let interval = setInterval(function () {
  box.getBoundingClientRect().top <= 0 ? changeClass() : null;
}, 1000 / 60);

function changeClass() {
  box.firstElementChild.classList.remove("inner2");
  box.firstElementChild.classList.add("inner");
  clearInterval(interval);
}

// --------menu--------

var menu = document.getElementById("menu");
function openmenu() {
  menu.style.right = "0";
}
function closemenu() {
  menu.style.right = "-200px";
}
