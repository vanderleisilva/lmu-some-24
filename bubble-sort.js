function randomArray(size) {
  let list = [],
    min,
    max;

  for (let index = 0; index < size; index++) {
    min = Math.ceil(0);
    max = Math.floor(1000);
    list.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return list;
}

function changePosition(listOfNumbers, p1, p2) {
  let temp = listOfNumbers[p1];
  listOfNumbers[p1] = listOfNumbers[p2];
  listOfNumbers[p2] = temp;
}

function bubbleSort(listOfNumbers) {
  let hasChanged, index;

  do {
    hasChanged = false;
    index = 0; // arrays in JS start with index 0

    do {
      if (listOfNumbers[index] > listOfNumbers[index + 1]) {
        changePosition(listOfNumbers, index, index + 1);
        hasChanged = true;
      }
      index++;
    } while (index < listOfNumbers.length - 1);
  } while (hasChanged); // repeats while changes were done

  return listOfNumbers;
}

// console.log(bubbleSort([1, 13, 29, 3, 19]));

// console.log(randomArray(30));


let array = bubbleSort(randomArray(1_000_000));

let start = Date.now();
bubbleSort(array);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
