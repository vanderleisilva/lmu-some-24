const canvas = document.getElementById("sierpinskiCanvas");
const ctx = canvas.getContext("2d");
const size = 600;
const depth = 2; // Amount of times that the triangle will be splitted into 3

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

function drawSierpinski(x, y, size, depth) {
  if (depth === 0) {
    drawTriangle(x, y, size);
    return;
  }

  let newSize = size / 2;
  drawSierpinski(x, y, newSize, depth - 1);
  drawSierpinski(x + newSize, y, newSize, depth - 1);
  drawSierpinski(
    x + newSize / 2,
    y - (Math.sqrt(3) / 2) * newSize,
    newSize,
    depth - 1
  );
}

function drawTriangle(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y - (Math.sqrt(3) / 2) * size);
  ctx.closePath();

  ctx.fillStyle = "#00aaff";
  ctx.fill();
  // ctx.stroke();
}

// Calculate starting position
const startX = (canvas.width - size) / 2;
const startY = (canvas.height + (Math.sqrt(3) / 2) * size) / 2;

drawSierpinski(startX, startY, size, depth);

// equilateral triangle height: (width/2) * Math.sqrt(3)
