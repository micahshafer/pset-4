const readlineSync = require("readline-sync");



let sum = 0;

let x = 0;



console.log("")

do {

     lowerBound = Number(readlineSync.question("Lower bound: "));

     upperBound = Number(readlineSync.question("Upper bound: "));

} while (lowerBound < Number.MIN_SAFE_INTEGER || lowerBound > Number.MAX_SAFE_INTEGER || upperBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound));





for (let x = lowerBound; x <= upperBound; x++) {

      if (x % 2 === 0) {

          for (x = lowerBound; x <= upperBound; x+=2) {

            sum = x + sum;

          }

      }



      if (x % 2 !== 0) {

          for (x = lowerBound + 1; x <= upperBound; x+=2) {

            sum = x + sum;

          }

      }

}

sum = sum.toLocaleString('en');



console.log("\n" + sum + ".\n")
