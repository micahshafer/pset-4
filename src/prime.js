const readlineSync = require("readline-sync");



let theInteger = 0;

let space = "";

let x = 2;



console.log("");



do {

      theInteger = Number(readlineSync.question("Non-negative integer: "));

} while (theInteger < 0 || theInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(theInteger) || !Number.isInteger(theInteger));



while (x < theInteger) {



    if (theInteger % x === 0 && x !== theInteger) {



        console.log("\nNot prime.\n")

        break;



    } else if (theInteger % x !== 0) {



        x++



    } else {



        break;



    }



}



if (x >= theInteger) {

  console.log("\nPrime.\n");

}
