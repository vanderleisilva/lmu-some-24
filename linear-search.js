const createArray = require("./create-array");
const { listSize, value } = require("./get-params");

function linearSearch(list, value) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(createArray(listSize))

// USAGE -----------------------------------------------------------------
const array = createArray(listSize);
let start = Date.now();
console.log(linearSearch(array, value));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
