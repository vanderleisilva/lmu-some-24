// Get the canvas element and context
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

// Define the number of lines to draw
const interval = 10;
const numberOfLines = Math.floor(canvas.height / interval);

// Draw lines
ctx.strokeStyle = "#894d4d";
for (let i = 0; i < numberOfLines; i++) {
  ctx.beginPath();
  // x, y
  ctx.moveTo(0, interval * i);
  ctx.lineTo(interval * i, canvas.height);
  ctx.stroke();
}
