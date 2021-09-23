console.log("Sveiki, mano vardas Algirdas");
const path = require("path");

const byla = "nodeKursas.html";
console.log(path.extname(byla));

const mat = require("./mat.js");
console.log(mat.sudetis(6, 4));
console.log(mat.atimtis(6, 4));

function atsitiktinisSkaicius ( max = 100 ) 
{ return Math.ceil( Math.random()*max );}
console.log(atsitiktinisSkaicius());
console.log(process.argv);

const [ pirmas, antras, vartotojoSkaicius ] = process.argv;
console.log( atsitiktinisSkaicius(vartotojoSkaicius) );

