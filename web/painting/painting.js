function addGreenStarSVG(color) {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // Set attributes (width, height, viewBox)
  svg.setAttribute("width", 96);
  svg.setAttribute("height", 96);
  svg.setAttribute("viewBox", "0 0 24 24");

  // Create the path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  // Set path attributes (fill, d)
  path.setAttribute("fill", color);
  path.setAttribute(
    "d",
    "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
  );

  // Add the path element to the SVG
  svg.appendChild(path);

  // Target the container element where you want to add the SVG
  const targetElement = document.getElementById("container"); // Replace with your target element ID

  // Append the SVG element to the target container
  targetElement.appendChild(svg);
}

function getColor(number) {
  const x = number % 3;
  const intensity = 255 - (number % 255);

  switch (x) {
    case 0:
      return `rgb(${intensity},0,0)`;
    case 1:
      return `rgb(0,${intensity},0)`;
    default:
      return `rgb(0,0,${intensity})`;
  }
}

function fibonacci(amount) {
  // Initialize an array to store Fibonacci numbers
  const fibonacciNumbers = [0, 1];

  // Loop until the last number is less than X
  for (let i = 2; fibonacciNumbers.length < amount + 2; i++) {
    // Calculate the next Fibonacci number
    const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];

    // Push the next number to the array
    fibonacciNumbers.push(nextNumber);
  }

  // Return the array containing Fibonacci (removing 0 and 1) numbers up to X
  return fibonacciNumbers.slice(2);
}

document.getElementById("paint").addEventListener("click", () => {
  const number = document.getElementById("amount").value;
  document.getElementById("container").innerHTML = "";

  const fibonacciNumbers = fibonacci(parseInt(number));

  console.log(fibonacciNumbers);

  for (const item of fibonacciNumbers) {
    console.log(getColor(item));
    addGreenStarSVG(getColor(item));
  }
});
