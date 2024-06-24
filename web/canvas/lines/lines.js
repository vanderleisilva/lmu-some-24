// Get the canvas element and context
const canvas = document.getElementById("artCanvas");
const context = canvas.getContext("2d");

// Define the number of lines to draw
const interval = 10;
const numberOfLines = Math.floor(canvas.height / interval);

// Draw lines

for (let i = 0; i < numberOfLines; i++) {
  context.beginPath();

  // left lines x, y
  context.strokeStyle = "red";
  context.moveTo(0, interval * i);
  context.lineTo(interval * i, canvas.height);
  context.stroke();

  // right lines x, y
  context.beginPath();
  context.strokeStyle = "blue";
  context.moveTo(canvas.width, interval * i);
  context.lineTo(canvas.width - interval * i, canvas.height);
  context.stroke();
}
