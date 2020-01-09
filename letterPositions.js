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
letterPositions("hellooo fer");