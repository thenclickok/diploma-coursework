const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", toggle);

function toggle() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "Select Light Mode";
  } else {
    button.textContent = "Select Dark Mode";
  }
}
