import { drawBall, drawUI, clearCanvas } from "./draw.js";
import { keys, setupInput } from "./input.js";

const c = document.getElementById("ballGame");
const ctx = c.getContext("2d");

// Game State
let radius = 20;
let x = radius;
let y = c.height - radius;
let speed = 5;

// Initialize the keyboard listeners
setupInput();

function update() {
  // 1. Clear
  clearCanvas(ctx, c.width, c.height);

  // 2. Logic (Movement)
  if (keys.up && y > radius) y -= speed;
  if (keys.down && y < c.height - radius) y += speed;
  if (keys.right && x < c.width - radius) x += speed;
  if (keys.left && x > radius) x -= speed;

  // 3. Draw
  drawUI(ctx);
  drawBall(ctx, x, y, radius);

  requestAnimationFrame(update);
}

// Start the game
update();
