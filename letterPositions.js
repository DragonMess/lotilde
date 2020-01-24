const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  const sentenceN = sentence.replace(' ','');

  for (let i=0; i< sentenceN.length; i++){
    if (results[sentenceN[i]]){
      results[sentenceN[i]].push(i);
    }else {
      results[sentenceN[i]]=[i];
    }
  }
  return console.log(results);
};

module.export = letterPositions;
// letterPositions("hellooo fer");