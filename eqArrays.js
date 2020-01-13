const assertEqual = require("./assertEqual");
function eqArrays(arrayA , arrayB) {

  if (arrayA.length != arrayB.length) {
    // not the same qty of elements
    return false;
  } else {
    let i = 0;
    while (i < arrayA.length) {       
      if (arrayA[i] !== arrayB[i]) {
        return false;
      } 
      i++;      
    }return true;
  }

}
module.exports = eqArrays;
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);
