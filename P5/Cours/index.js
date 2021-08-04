//POO
//https://www.youtube.com/watch?v=_up9_k432lI&t=0s

const obj = {
  //index: value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: true,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },

  // direBonjour() {
  //   console.log("Bonjour je suis " + this.pseudo);
  // },
};

// console.log(obj);

//Ajouter
obj.age = 24;

//Modifier
obj.pseudo = "FS";

//Supprimer
delete obj.ville;

//Checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75Kg",
  pseudo: "From",
};

//Fusionner objets
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//Empecher les modifications
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);

newObj.pseudo = "Test";
newObj.adresse = "42 avenue du code";

// console.log(newObj);

//---------------------
//Construire des objets
//---------------------

//Fonction constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("From Scratch", "Bordeaux");
const user2 = new User("Denis", "Nantes");

// console.log(user2.getCity());

//-----------------------------------

// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3("FS", "Nice");

// console.log(user4);

//------------------------------------
//Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //Méthodes
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Samia", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    //...
  },
  method2() {
    //...
  },
});

// console.log(user5);

//----------
//L'héritage
//----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

class cat extends Animal {
  hunt() {
    console.log("J'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
