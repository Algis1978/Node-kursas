console.log("Sveiki, mano vardas Algirdas");
const myPath = require("path");

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

const myFs = require("fs");
!( myFs.existsSync("naujasKatalogas/kitasKatalogas") )?
myFs.mkdirSync("naujasKatalogas/kitasKatalogas"):
console.log("Katalogas jau yra");

myFs.writeFileSync("testoByla.txt", "Tai yra testo bylos tekstas");
console.log( myFs.readFileSync("testoByla.txt") );
console.log( myFs.readFileSync("testoByla.txt", "utf8") );

const klaida = new Error ("Tai yra klaida");
console.log( typeof(klaida) );

try {throw klaida;}
catch (klaidosObjektas) {console.log(klaidosObjektas);}
console.log("Tai programos tęsinys");

const klaidosByla = "klaidosByla.txt";
function bylosSkaitytuvas (byla) {
    try{ const bylosTekstas = myFs.readFileSync(byla, "utf8");
    console.log("Bylos tekstas");
    return bylosTekstas;}
    catch (err) {
        console.log("Klaida bylos skaityme");
        console.log(err);}
    return null;}

    bylosSkaitytuvas ("blabla.html");

    const pabaigosTekstas = () => console.log ("Tai funkcijos operacijos pabaiga");
    
    const testoKatalogas = "TestoKatalogas";
    const callFunkcija = () => {console.log ("Go Away!!")};
    const asinchroninisKatalogas = (katalogas, callbackFunkcija) => {
        myFs.mkdir(katalogas, callbackFunkcija);
        console.log("Teksto eilutė");}

        asinchroninisKatalogas(testoKatalogas, callFunkcija);