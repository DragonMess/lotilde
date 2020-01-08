
// function eqArrays(actual,expected) {

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

// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]);

function middle (arrayA) {
  let middleInd = Math.floor(arrayA.length/2);
  // console.log(arrayA.length % 2);
  // console.log(middleInd);
  // console.log(middleInd-1);
  // console.log(arrayA[middleInd + 1]);

  if (arrayA.length % 2 !== 0){
    return console.log(arrayA[middleInd]);
  }else {
    return console.log(arrayA[middleInd-1] + " ," + arrayA[middleInd]);
  }
}

middle([1, 2, 3, 4]);