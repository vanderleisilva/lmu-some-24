const createArray = require("./create-array");
const { listSize, value } = require("./get-params");

function binarySearch(arr, target) {
  // Check for empty array or invalid input
  if (arr.length === 0 || target === undefined) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Find the middle index
    const mid = parseInt((start + end) / 2);

    // Check if the target is at the middle index
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // Search in the upper half
      start = mid + 1;
    } else {
      // Search in the lower half
      end = mid - 1;
    }
  }

  // Target not found
  return -1;
}

// USAGE -----------------------------------------------------------------
const array = createArray(listSize);
let start = Date.now();
console.log(binarySearch(array, value));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
