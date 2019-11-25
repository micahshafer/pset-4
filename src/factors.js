const readlineSync = require("readline-sync");



let theInteger = 0;

let x = 1;

let y = 0;

let result = "";



console.log("");



do {

      theInteger = Number(readlineSync.question("Positive integer: "));

} while (theInteger <= 0 || theInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(theInteger) || !Number.isInteger(theInteger));



while (x <= Math.floor(Math.sqrt(theInteger))) {



    if (x <= theInteger) {

      y = theInteger % x



      if (x === Math.floor(Math.sqrt(theInteger))) {

        result = result + x + ". "

        break;

      } else if (y === 0) {

        result = result + x + ", " + (theInteger / x) + ", "

      }

      x++

    }

}





  console.log("\n" + result);
