export const keys = {
  up: false,
  down: false,
  right: false,
  left: false,
};

export function setupInput() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") keys.up = true;
    if (e.key === "ArrowDown") keys.down = true;
    if (e.key === "ArrowRight") keys.right = true;
    if (e.key === "ArrowLeft") keys.left = true;
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp") keys.up = false;
    if (e.key === "ArrowDown") keys.down = false;
    if (e.key === "ArrowRight") keys.right = false;
    if (e.key === "ArrowLeft") keys.left = false;
  });
}
