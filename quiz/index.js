// selecteurs
//document.querySelector("h4").style.background = "yellow"

/*
const baliseHTML = document.querySelector("h4");
baliseHTML.style.background = "yellow";
*/

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector('p');


questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//---------------------------------------------------------------

//Mouse Events

const mouseMove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX+"px";
  mouseMove.style.top = e.pageY+"px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
})

questionContainer.addEventListener("mouseenter", () => {
  
})