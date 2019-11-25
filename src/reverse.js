const readlineSync = require("readline-sync");



let theInteger = 0;

let space = "";



console.log("");



do {

      theInteger = Number(readlineSync.question("Positive integer: "));

} while (theInteger < 1 || theInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(theInteger) || !Number.isInteger(theInteger));



while (theInteger > 0) {



  let value = (theInteger % 10)

  theInteger = Math.floor(theInteger / 10)



  if (theInteger > 0) {

    space = space + value + ", ";

  } else {

    space = space + value + ". ";

  }



}



console.log("\n" + space + "\n");
