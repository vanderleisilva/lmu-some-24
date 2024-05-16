// const createArray = require("./create-array");
// const { listSize, value } = require("./get-params");

function insertBinary(list, value) {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    // Find the middle index
    let mid = parseInt((start + end) / 2);

    if (list[mid] === value) {
      list.splice(mid, 0, value); // adds value at index
      return list;
    } else if (list[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (value > list[end]) {
    list.splice(end + 1, 0, value); // adds value at index
  } else {
    list.splice(end, 0, value); // adds value at index
  }

  return list;
}

console.log(insertBinary([1, 3, 13, 19, 29, 33, 44], 21));

// USAGE -----------------------------------------------------------------
// const array = createArray(listSize);
// let start = Date.now();
// console.log(insertBinary(array, value));
// let timeTaken = Date.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");
