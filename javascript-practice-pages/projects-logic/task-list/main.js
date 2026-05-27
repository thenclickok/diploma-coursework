const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-list-item");
const firstX = document.getElementById("first-x");
const firstListItem = document.getElementById("first-list-item");

addButton.addEventListener("click", function addElement() {
  const existingItem = document.querySelector(".list-item");

  const newItem = document.createElement("li");
  newItem.classList.add("list-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const text = document.createElement("input");
  text.type = "text";
  text.maxLength = 30;
  text.classList.add("text-box");
  text.classList.add("gluten-font");

  const deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-box");
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", function deleteElement() {
    newItem.remove();
  });

  newItem.appendChild(checkbox);
  newItem.appendChild(text);
  newItem.appendChild(deleteButton);
  listContainer.appendChild(newItem);
});

firstX.addEventListener("click", () => {
  firstListItem.remove();
});
