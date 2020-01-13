
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

assertArrays([1, 2, 3], [1, 2, 3]);
assertArrays([1, 2, 3], [3, 2, 1]);