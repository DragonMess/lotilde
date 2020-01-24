
const assertArraysEqual = require('./assertArraysEqual');

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

module.export = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); 
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);