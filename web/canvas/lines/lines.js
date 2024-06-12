// Get the canvas element and context
const canvas = document.getElementById("artCanvas");
const context = canvas.getContext("2d");

// Define the number of lines to draw
const interval = 10;
const numberOfLines = Math.floor(canvas.height / interval);

// Draw lines
context.strokeStyle = "red";

// context.beginPath();
// // x, y
// context.moveTo(10, 20);
// // width, height
// context.lineTo(100, 200);
// context.stroke();


// context.beginPath();
// // x, y
// context.moveTo(200, 20);
// // width, height
// context.lineTo(100, 200);
// context.stroke();

for (let i = 0; i < numberOfLines; i++) {
  context.beginPath();
  // x, y
  context.moveTo(0, interval * i);
  // width, height
  context.lineTo(interval * i, canvas.height);
  context.stroke();
}
