const assertEqual = require("./assertEqual");

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

countLetters(someString);
module.export = countLetters; 

