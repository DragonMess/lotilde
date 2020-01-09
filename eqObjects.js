const assertEqual = function(actual,expected){
  if(actual===expected){
    console.log(`Assertion Passed: ${actual} === +${expected}`);
  }else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!




const eqObjects = function(object1, object2) {

let key1;

  for (key1 in object1) { 
    // console.log(object2[key1]);
    if(object1[key1] !== object2[key1]){
      return console.log(`Assertion Failed: ${object1} !== ${object2}`);
    }
    return console.log(`Assertion Passed: ${object1} === +${object2}`);
  }
}
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1"};
(eqObjects(cd,dc));
