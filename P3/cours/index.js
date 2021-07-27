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

// console.log(data[2].pseudo);

//---------------------------------------
//Les structures de controle
//---------------------------------------
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé(e) que " + data[1].pseudo);
} else {
  //Valeur si faux
}

//While
// let w = 0;

// while (w < 10) {
//   w++;
//   console.log(w);
// }

// let d = 0;

// do {
//   d++;
//   console.log(d);
// } while (d < 5);

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

//----------------
// Méthodes String
//----------------

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof string2);
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); //retourne -1 s'il ne connait pas

//let newString = string2.slice(2);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//--------------------------
// Méthodes pour les numbers
//--------------------------

// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

//Math
// console.log(Math.PI);
// console.log(Math.round(4.4));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

console.log(Math.floor(Math.random() * 50));
