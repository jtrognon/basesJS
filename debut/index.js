let number = 25;
let string = `Le chiffre attendu est : ${number} degrés`;
let boolean = true;
let array = ["je", "suis", 24, false];
let object = {
  prenom: "Julie",
  age: 16,
  ville: "Sergy",
};
/* avec ` pas besoin de mettre + et utiliser ${variable} pour introduire variable */
console.log(string);
console.log(typeof array);

if (number != 24) {
  // !== type et != valeur
  console.log(number);
}

function direBonjour() {
  console.log("salut");
}

direBonjour();

const faireUneTache = (tache) => {
  console.log(`je fais : ${tache}`);
};

faireUneTache("les courses");
faireUneTache("de la marche à pied");

function calc(x, y) {
  return x + y;
}

console.log(calc(4, 8));

(function maFonction() {
  //pas besoin de nom car on ne peut pas la
  console.log("je me joue toute seule");
})();

(() => {
  console.log("je me joue aussi toute seule");
})();

function add2() {
  let a = 4;
  return a + 2;
}

console.log(add2());
