let myArray = [];
let arrayDisplay = document.getElementById("array-section");
let addTopButton = document.getElementById("add-top-button");
let addBottomButton = document.getElementById("add-bottom-button");
let deleteTopButton = document.getElementById("delete-top-button");
let deleteBottomButton = document.getElementById("delete-bottom-button");

addTopButton.addEventListener("click", addToTop);

function addToTop() {
  let addTopItem = document.getElementById("add-top-item");
  let newTopItem = addTopItem.value;

  if (newTopItem !== "") {
    myArray.unshift(newTopItem); //add an item

    arrayDisplay.innerHTML = myArray.join("<br/>");
    //update array section so user sees the change
    addTopItem.value = "";
    //clears the input for the next entry
  }
}

addBottomButton.addEventListener("click", addToBottom);

function addToBottom() {
  let addBottomItem = document.getElementById("add-bottom-item");
  let newBottomItem = addBottomItem.value;

  if (newBottomItem !== "") {
    myArray.push(newBottomItem);

    arrayDisplay.innerHTML = myArray.join("<br/>");

    addBottomItem.value = "";
  }
}

deleteTopButton.addEventListener("click", deleteTop);

function deleteTop() {
  myArray.shift();

  arrayDisplay.innerHTML = myArray.join("<br/>");
}

deleteBottomButton.addEventListener("click", deleteBottom);

function deleteBottom() {
  myArray.pop();

  arrayDisplay.innerHTML = myArray.join("<br>");
}
