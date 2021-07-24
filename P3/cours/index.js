//Rappel des types de données
let tring = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //type Undefined

//Tableau
let array = ["Bordeau", "Toulouse", "Nantes"];

let array2 = ["Bordeau", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let object = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "Python", "Java"],
  admin: false,
};

// console.log(object.technos[0][1]);

// object.adresse = "22 rue ...";
// object.age = 23;

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "Python", "Java"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Javascript", "CSS", "Java"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["PHP", "Python", "Java"],
    admin: true,
  },
];

console.log(data[2].pseudo);

//---------------------------------------
//Les structures de controle
//---------------------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé(e) que " + data[1].pseudo);
} else {
  //Valeur si faux
}

//While
let w = 0;

while (w < 10) {
  w++;
  console.log(w);
}

let d = 0;

do {
  d++;
  console.log(d);
} while (d < 5);

//Les boucles for
// for (const user of data) {
//   document.body.innerHTML += `<li>${user.pseudo} - ${user.age}ans<\li>`;
// }

for (i = 0; i < data.length; i++) {
  user = data[i];
  document.body.innerHTML += `<h2>${user.pseudo} - ${user.age}ans<\h2>`;
}

//Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "Javascript":
      document.body.style.background = "yellow";
      break;
    case "Python":
      document.body.style.background = "blue";
      break;
    case "Java":
      document.body.style.background = "red";
    default:
      null;
  }
});
