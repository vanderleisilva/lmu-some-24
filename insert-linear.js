// const createArray = require("./create-array");
// const { listSize, value } = require("./get-params");

function insertLinear(list, value) {
  let index = 0;
  while (list[index] < value && index < list.length) {
    index++;
  }
  list.splice(index, 0, value); // adds value at index
  return list;
}

console.log(insertLinear([1, 3, 13, 19, 29, 33, 44], 21));

// USAGE -----------------------------------------------------------------
// const array = createArray(listSize);
// let start = Date.now();
// console.log(insertLinear(array, value));
// let timeTaken = Date.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");
