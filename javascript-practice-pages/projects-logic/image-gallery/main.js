function addImage() {
  const userInput = document.getElementById("image-url").value;

  if (userInput) {
    const display = document.getElementById("image-display");
    const newDiv = document.createElement("div");
    const newImage = document.createElement("img");
    const removeButton = document.createElement("button");
    newDiv.classList.add("gallery-item");
    newImage.src = userInput;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.onclick = () => display.removeChild(newDiv);
    newDiv.appendChild(newImage);
    newDiv.appendChild(removeButton);
    display.appendChild(newDiv);
    document.getElementById("image-url").value = "";
  } else {
    alert("please enter a valid image URL");
  }
}

document.getElementById("add-button").addEventListener("click", addImage);
