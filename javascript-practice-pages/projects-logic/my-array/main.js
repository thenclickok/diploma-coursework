let myArray = [];
let arrayDisplay = document.getElementById("array-section");
let addTopButton = document.getElementById("add-top-button");
let addBottomButton = document.getElementById("add-bottom-button");
let deleteTopButton = document.getElementById("delete-top-button");
let deleteBottomButton = document.getElementById("delete-bottom-button");

addTopButton.addEventListener("click", addToTop);

function displayList() {
  let listHTML = "";

  myArray.forEach((item, index) => {
    listHTML += `Item ${index + 1}: ${item}<br/>`;
  });
  arrayDisplay.innerHTML = listHTML; //update array section so user sees the change
}

function addToTop() {
  let addTopItem = document.getElementById("add-item");
  let newTopItem = addTopItem.value;

  if (newTopItem !== "") {
    myArray.unshift(newTopItem); //add an item
    displayList();
    addTopItem.value = ""; //clears the input for the next entry
  } else {
    alert("Please enter a valid input.");
  }
}

addBottomButton.addEventListener("click", addToBottom);

function addToBottom() {
  let addBottomItem = document.getElementById("add-item");
  let newBottomItem = addBottomItem.value;

  if (newBottomItem !== "") {
    myArray.push(newBottomItem);
    displayList();
    addBottomItem.value = "";
  } else {
    alert("Please enter a valid input.");
  }
}

deleteTopButton.addEventListener("click", deleteTop);

function deleteTop() {
  if (myArray.length !== 0) {
    myArray.shift();
    displayList();
  } else {
    alert("There are no items to delete.");
  }
}

deleteBottomButton.addEventListener("click", deleteBottom);

function deleteBottom() {
  if (myArray.length !== 0) {
    myArray.pop();
    displayList();
  } else {
    alert("There are no items to delete.");
  }
}
