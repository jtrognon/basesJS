const obj = {
  //index: value
  pseudo: "From Scratch",
  ville: "Bordeaux",

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
