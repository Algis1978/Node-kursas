console.log("Go Away!!!");
const { greyscale } = require("jimp");
const myJimp = require("jimp");
const paveikslelis = "./paveikslelis.jpg";
const rePaveikslelis = "./rePaveikslelis.jpg";

callback1 = (err, duomenys) => {
    if (err) {
        console.log("Paveikslėlio nėra");
    } 
    else {
        console.log("Paveikslėlis yra");
    }
}
myJimp.read(paveikslelis, callback1);

   myJimp.read (paveikslelis, (err, duomenys) => {
    if (err) {
        console.log("Paveikslėlio nėra");
    } 
    else {
        console.log("Paveikslėlis yra");
    }
    duomenys
    .resize(512, myJimp.AUTO) // pakeis paveikslėlio rezoliucijos pločio ir aukščio parametrus
    .greyscale() // pakeis į juodą-baltą
    .blur(2) // pritaikys blur efektą
    .write (rePaveikslelis, (err) => {// naują bylą įrašys rePaveikslelis vietoje jei nebus klaidos  
        if (err) {console.log("Klaida paveikslėlio koregavime")
        } else {console.log("Paveikslėlio korekcija sėkminga")}
        });
   });