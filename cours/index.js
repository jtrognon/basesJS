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
const response = document.querySelector("p");

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

const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "#2d1aff";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//---------------------------------------------------------------
//key press event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.volume = 0.05;
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "Enter") {
    keypressContainer.style.background = "#2d1aff";
    keypressContainer.style.color = "white";
  } else if (e.key === "t") {
    keypressContainer.style.background = "#1a1a1a";
    keypressContainer.style.color = "teal";
  } else {
    keypressContainer.style.background = "green";
    keypressContainer.style.color = "white";
  }

  //ring();
});

//--------------------------------------------------------------
//Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------------------------
// Form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form;
addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
});

//--------------------------------------------------------------
//Load event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//--------------------------------------------------------------
// ForEach
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
//--------------------------------------------------------------
//AddEventListener vs onclick

// document.body.onclick = () => {
//   console.log("Click");
// }

// document.body.onclick = () => {
//   console.log("Click !");
// }

//Bubbling => fin (de base l'eventListener est paramétré en mode Bublbing)
window.addEventListener(
  "click",
  () => {
    console.log("click 1");
  },
  false
); //de base sur false

//usecapture
window.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
);
