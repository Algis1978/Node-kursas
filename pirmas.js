console.log("Sveiki, mano vardas Algirdas");
const path = require("path");

const byla = "nodeKursas.html";
console.log(path.extname(byla));

const mat = require("./mat.js");
console.log(mat.sudetis(6, 4));
console.log(mat.atimtis(6, 4));