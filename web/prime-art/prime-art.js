function generate() {
  const number = parseInt(document.getElementById("text").value);
  let = result = "";

  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      result += `<span style="background-color: #${i.toString(16).padEnd(6, "0")}">${i}</span>`;
    } else {
      result += `<span class="not-prime">${i}</span>`;
    }
  }

  document.getElementById("result").innerHTML = result;
}

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
