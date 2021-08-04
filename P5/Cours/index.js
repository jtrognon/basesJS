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
