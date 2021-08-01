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

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
