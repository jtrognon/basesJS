"use strict";

//Canvas
//------

// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   ctx.fillStyle = "rgb(200, 0, 0)";
//   ctx.fillRect(50, 50, 50, 150);

//   ctx.fillStyle = "rgba(0, 100, 200, 0.5)";
//   ctx.fillRect(100, 30, 100, 50);

//   ctx.fillStyle = "rgba(100, 100, 200, 0.5)";
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(15, 25, 40, 40);
//   ctx.strokeRect(125, 75, 50, 50);

//   ctx.fillStyle = "rgba(200, 100, 200, 0.8)";
//   ctx.beginPath();
//   ctx.moveTo(180, 150);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 150);
//   ctx.fill();
// }

// window.addEventListener("load", draw);

try {
  //Test un block de code
  maFonction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
  } catch (err) {
    return false;
  }
}

// console.log(isValidJSON("pazjdhazedfipu"));

// try {
//   maFonction();
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("on est arrivé au bout");
// }

//-----
//throw
//-----

// function isNumber(num) {
//   if (isNaN(num)) {
//     throw "Not a number !";
//   } else {
//     console.log("C'est un nombre");
//   }
// }

// try {
//   isNumber("a");
// } catch (error) {
//   console.log(error);
// }

//-----------
//Strict mode
//-----------

// voiture = "Toyota";

// console.log(voiture);

//https://www.youtube.com/watch?v=R453LmdH9LY

//https://www.youtube.com/watch?v=x5kTcfN9xL0&list=PLEiMYEzpB4Qu8A6ycWzv_Q8BkvE2F8K9P&t=0s
