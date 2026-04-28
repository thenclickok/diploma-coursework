export function drawBall(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
}

export function drawUI(ctx) {
  ctx.fillStyle = "black";
  ctx.font = "30px Arial";
  ctx.fillText("Ball Game", 10, 40);
}

export function clearCanvas(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
}
