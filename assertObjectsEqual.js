
const assertObjectsEqual = function(actual, expected) {

let key1;

  for (key1 in actual) { 
    // console.log(object2[key1]);
    if(actual[key1] !== expected[key1]){
      return console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return console.log(`Assertion Passed: ${actual} === +${expected}`);
  }
}