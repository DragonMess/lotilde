// const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")
// TEST
// One to two elements, returns empty array
// assertArraysEqual(middle([1]), []) 
// assertArraysEqual(middle([1, 2]), []) 
// // Uneven number returns one element
// assertArraysEqual(middle([1, 2, 3]), [2]) 
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) 
// // Even number returns two elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) 
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) 

const assert = require('chai').assert;
const middle = require("../middle")

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});