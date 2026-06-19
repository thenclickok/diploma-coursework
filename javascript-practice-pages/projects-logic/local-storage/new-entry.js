//Button reveals hidden input for the add tag action

const addTagButton = document.getElementById("add-tag");

addTagButton.addEventListener("click", () => {
  const tagInput = document.getElementById("tag-input");
  tagInput.classList.toggle("display-input");
});

//Automatic today's date added to entries

const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const formattedDate = today.toLocaleDateString("en-us", options);

document.getElementById("date-today").textContent = formattedDate;
document.getElementById("hidden-date-input").value = formattedDate;

//accessing form data to use in js

const form = document.querySelector("#entry-form");
const saveButton = document.querySelector("#save-entry-button");
const userTitle = document.querySelector("#untitled-reflection");
const tagInput = document.querySelector("#tag-input");
const reflection = document.querySelector("#reflection");

/*initialising an array that uses any stored entries 
or an empty array if there are no entries yet*/

let myArray = JSON.parse(localStorage.getItem("entries")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents data loss when browser refreshed
  if (userTitle.value !== "" && reflection.value !== "") {
    const newEntry = {
      //make a new entry object to put in the array
      title: userTitle.value,
      reflection: reflection.value,
      date: formattedDate,
      tag: tagInput.value || "No tag", //optional tag input
    };
    //put the newEntry object into the array
    myArray.push(newEntry);

    //save the updated array to localStorage
    localStorage.setItem("entries", JSON.stringify(myArray));

    console.log("Entry saved to localStorage", myArray);

    form.reset();
  } else {
    console.log("Form incomplete");
  }
});
