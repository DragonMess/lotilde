const assertEqual = function(actual,expected){
  if(actual===expected){
    console.log(`Assertion Passed: ${actual} === +${expected}`);
  }else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};


function tail(someArray){
  let newArray = [];
  let i=1;
  while(i<someArray.length){
    newArray.push(someArray[i]);
    i++;
  }
  //console.log(newArray);

return (newArray[0]);
}

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//head([5,6,7]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 