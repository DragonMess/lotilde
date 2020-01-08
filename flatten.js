function assertArrays(actual,expected) {
  if (actual.length != expected.length) {
    return false;
  } else {
    let i = 0;
    while (i < actual.length) {
      if (actual[i] !== expected[i]) {
        return console.log(`Assertion Failed: ${actual} !== ${expected}`)
      } 
      i++;
    }return console.log(`Assertion Passed: ${actual} === +${expected}`);
  }
}

function eqArrays(arrayA , arrayB) {
  if (arrayA.length != arrayB.length) {
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

function flatten(arrayC){
  let flatArray = [];
  for (let i = 0; i < arrayC.length; i++){
    if ( Array.isArray(arrayC[i]) ){
      for ( let j = 0; j < arrayC[i].length; j++){
        flatArray.push(arrayC[i][j]);
      }
    }else {
      flatArray.push(arrayC[i])
    }
  }return console.log(flatArray);
}
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
var aar =[1, 2, [3, 4], 5, [6]];
// console.log(Array.isArray(aar));
// console.log(typeof(aar));
//console.log(aar[2][0]);