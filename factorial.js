function factorial_iterative(n) {
  if (n < 1) return 0;

  let result = 1;
  // [5 = 1 * 2 * 3 * 4 * 5]
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

function factorial_recursive(n) {
  // base cases
  if (n < 1) return 0;
  if (n === 1) return 1;
  //---

  return n * factorial_recursive(n - 1);
}


// console.log(factorial_iterative(5));
console.log(factorial_recursive(3));