//XMLHttpRequest

function reqListener() {
  console.log(this.responseText);
}

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//------
// FETCH
//------

// fetch("mon-url", "objet d'options")

// fetch("https://api.blablagues.net/?rub=blagues")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.log(error));

// https://developer.mozilla.org/fr/docs/Web/HTTP/Status

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  header: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//----------------------------------------------------------

//CRUD => Create (POST), read (GET), update (PUT), delete (DELETE)

// const init2 = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     pseudo: "From Scratch",
//     message: "Comment ça va ?",
//   }),
//   mode: "cors",
//   credentials: "same-origin",
// };

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    age: 25,
  }),
  mode: "cors",
  credentials: "same-origin",
};

const init3 = {
  method: "DELETE",
  header: {
    "Content-type": "application/json",
  },
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  // fetch("http://localhost:3000/posts", init2).then(() =>
  //   console.log("data envoyée")
  // );
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
  // fetch("http://localhost:3000/posts/3", init3).then(() =>
  //   console.log("data supprimée")
  // );
});

//----------
//Asynchrone
//----------

setTimeout(() => {
  // console.log("test");
}, 2000);

//Promise
// fetch("monlien").then((res) => //...);

//async/await

async function fetchData() {
  await fetch("monlien");
  //attend que le await soit exécuté avant de faire la suite

  await executeFonction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  //attend que le await soit exécuté avant de faire la suite

  await executeFonction();
};

//-------
//Le JSON
//-------

//Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // Parse => transforme en objet js
    // console.log(JSON.parse(settings));
  });

//-------
//Web API
//-------

//--------------
//Client Storage
//--------------

//Local Storage

//https://www.youtube.com/watch?v=u_rjAX3kr7E&t=0s

localStorage.data = "je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};

//Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

//---------------
//Session Storage

sessionStorage.dataSettings = "55px";
// console.log(sessionStorage.dataSettings);
sessionStorage.clear();
