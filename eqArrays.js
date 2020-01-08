// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === +${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
  
// };
// assertEqual();
// // assertEqual("Lighthouse Labs","Bootcamp");





function eqArrays(arrayA , arrayB) {

  if (arrayA.length != arrayB.length) {
    // not the same qty of elements
    return false;

  } else {

    let i = 0;

    while (i < arrayA.length) {
        
      if (arrayA[i] !== arrayB[i]) {
        return console.log(false);

      } 
      i++;
        
    }return console.log(true);

  }


}

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);