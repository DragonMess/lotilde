function assertArrays(actual,expected) {
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

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);