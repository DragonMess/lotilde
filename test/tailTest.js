const assertEqual = require("../assertEqual");
// const tail = require("../tail");
// const words = ["Lighthouse", "Labs", "hey"];
// tail(words);

// assertEqual(tail(words).length, 2);
// assertEqual(tail(["Hello", "Words", "Okay", 1, 3, 4]).length,5);
const assert = require('chai').assert;
const tail = require("../tail");

// =====  test with assert.strictEqual ====
// describe("#tail", () => {
//   it("returns 5 for ['Hello','Words','Okay', 1, 3, 4].length", () => {
//     assert.strictEqual(tail(['Hello','Words','Okay', 1, 3, 4]).length, 5);
//   });
// });

// const assertDeepEqual = require('chai').assertDeepEqual;

describe("#tail", () => {
  it("returns ['Words','Okay'] for ['Hello','Words','Okay']", () => {
    assert.deepEqual(tail(['Hello','Words','Okay']), ['Words','Okay']);
  });
  it("returns [] for ['dog']", () => {
    assert.deepEqual(tail(['dog']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});