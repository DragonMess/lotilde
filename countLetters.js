const assertEqual = function(actual,expected){
  if(actual===expected){
    console.log(`Assertion Passed: ${actual} === +${expected}`);
  }else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(dataUser){
  let letters = [];
  for (let letter of dataUser){
    letters.push(letter);
  }console.log(letters)
  let results = {};
  for (let item of letters) {
    if (results[item]){
      results[item]+=1;
    }else {
      results[item]=1;
    }
  }return console.log(results);
}

// console.log(countLetters('LHL'));
countLetters('LHL');

