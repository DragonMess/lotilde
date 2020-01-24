const assertEqual = require("./assertEqual");


const findKey = function ( obj , callback) 
{
    let valueOk;
    let firstValue;
    let someArray = [];
    //loop in array to find the value
    for(key in obj) 
    {
        if(callback(obj[key])) 
        {
            valueOk = key;
            someArray.push(valueOk);
            firstValue = someArray[0];
        }
        
    }return firstValue;
}

module.export = findKey;
// const test = findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2);
  
//   const exp ="noma";


// assertEqual(test,exp);

