console.log("Sveiki, mano vardas Algirdas");
const myPath = require("path");
const myFs = require("fs");

const byla = "nodeKursas.html";
console.log(myPath.extname(byla));

const myMat = require("./mat.js");
console.log(myMat.sudetis(6, 4));
console.log(myMat.atimtis(6, 4));

function atsitiktinisSkaicius ( max = 100 ) 
{ return Math.ceil( Math.random()*max );}
console.log(atsitiktinisSkaicius());
console.log(process.argv);

const [ pirmas, antras, vartotojoSkaicius ] = process.argv;
console.log( atsitiktinisSkaicius(vartotojoSkaicius) );


