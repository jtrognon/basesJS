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
    age: 33,
    technos: ["PHP", "Python", "Java"],
    admin: true,
  },
];

console.log(data[2].pseudo);
