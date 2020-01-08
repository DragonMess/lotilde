
function assertArraysEqual(actual,expected) {
  if (actual.length != expected.length) {
    // not the same qty of elements
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
const assertEqual = function(actual,expected){
  if(actual===expected){
    console.log(`Assertion Passed: ${actual} === +${expected}`);
  }else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } 
};
function without(sourceArray,itemsToRemove){
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++){
    if (sourceArray[i] !== itemsToRemove[i]){
      newArray.push(sourceArray[i]);
    }else {
      newArray = newArray;
    }
    
  }return console.log(newArray);
}
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);