const readlineSync = require("readline-sync");



let theInteger = 0;

let space = "";

let theSum = 0;



console.log("");



do {

      theInteger = Number(readlineSync.question("Positive integer: "));

} while (theInteger < 1 || theInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(theInteger) || !Number.isInteger(theInteger));



while (theInteger > 0) {



  let value = (theInteger % 10)

  theInteger = Math.floor(theInteger / 10)



  if (value % 2 === 1) {

    theSum = theSum + value;

  } else if (value % 2 === 0){

    continue;

  } else {

    continue;

  }



}



console.log("\n" + theSum + ".\n");
