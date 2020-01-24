const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

// const assertArraysEqual = function (arr1, arr2) {


const takeUntil = function(array, callback) {

  // loop array and find the indice for first elemnte for true condition
  let value;
  const someArray = [];

  for(let i = 0; i < array.length; i++){

    if(callback(array[i])) {
      value = i;
    }
    
  }
  //slice array wuth the find value
   return array.slice(0,value);
}

module.export = takeUntil;

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// const data2Exp = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

// assertArraysEqual(data2,data2Exp);
// console.log('assertArraysEqual(data2,data2Exp)', assertArraysEqual(results2,data2Exp));