
// function assertArraysEqual(actual,expected) {

//   if (actual.length != expected.length) {
//     // not the same qty of elements
//     return false;

//   } else {

//     let i = 0;

//     while (i < actual.length) {
        
//       if (actual[i] !== expected[i]) {
//         return console.log(`Assertion Failed: ${actual} !== ${expected}`)

//       } 
//       i++;
        
//     }return console.log(`Assertion Passed: ${actual} === +${expected}`);

//   }


// }
// module.exports = assertArraysEqual;

// // assertArrays([1, 2, 3], [1, 2, 3]);
// // assertArrays([1, 2, 3], [3, 2, 1]);

const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
     } 
    }
    return console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
};
module.exports = assertArraysEqual;