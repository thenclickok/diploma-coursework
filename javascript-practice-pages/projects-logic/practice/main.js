//alerts and console.log

/*window.onload = function () {
  alert("Welcome to this page");
  console.log("The web page has loaded");
};*/

//using a button to change the text of an element

function changeText() {
  let heading = document.getElementById("demo");
  heading.textContent = "Goodbye World";
}

//if else statements

let p = 12;
document.getElementById("p-variable").innerText = p;

if (p >= 14) {
  console.log("The number is more than or equal to 14");
} else {
  console.log("The number is less than 14");
}

//switch statements

let favouriteCar = "Ford";
document.getElementById("switch-variable").innerText = favouriteCar;

switch (favouriteCar) {
  case "Honda":
    console.log("Your favourite car is a Honda");
    break;

  case "Ford":
    console.log("Your favourite car is a Ford");
    break;

  default:
    console.log("No known car specified");
    break;
}

//template literals

const animal = { type: "cat", color: "black", age: 3 };
const newHTML = `<p>I have a ${animal.color} ${animal.type} who is ${animal.age} years old.</p>`;
/*FYI: to render newHTML as body innerHTML from a js file 
I put a script tag in HTML body like this: <script src="main.js"></script> 
and the page is cleared, only containing the newHTML*/

document.getElementById("template-literal").innerHTML = newHTML;

//OLD WAY (before template literals) - string concatenation

const stringConcat =
  "I have a " +
  animal.color +
  " " +
  animal.type +
  " who is " +
  animal.age +
  " years old.";

document.getElementById("string-concat").innerHTML = stringConcat;

//arrays and loops

const fruits = ["apple", "orange", "pear", "grapes", "mango"];

let text = "";

for (let i = 0; i < fruits.length; i++) {
  text = text + fruits[i] + "<br>";
}

document.getElementById("fruits-list").innerHTML =
  `An array called "fruits" contains these values:<br/><br/> ${text}`;

//learning about CLASSES as templates for objects

class Person {
  constructor(name, gender, age, hairColor, job, hobby) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.hairColor = hairColor;
    this.job = job;
    this.hobby = hobby;
  }
}

const player1 = new Person("Jude", "male", 23, "blond", "doctor", "chess");
const player2 = new Person("Jade", "female", 25, "red", "scientist", "piano");

//inspect the properties of an object in the console to see how they mirror the class
console.log("Player 1:", player1);

//can also inspect specific properties using dot notation
console.log("Player2's age:", player2.age);

const listItems = Object.values(player1)
  .map((val) => `<li>${val}</li>`)
  .join(" ");

document.getElementById("player1").innerHTML = listItems;

//using querySelector to change the css of the selected element

const qs = document.querySelector("section p:first-of-type");
qs.style.border = "2px solid orange";
qs.style.display = "inline";

/*best practice way of doing the above: two options below

document.addEventListener("DOMContentLoaded", () => {
  const qs = document.querySelector("section p:first-of-type");
  
  if (qs) {
    qs.style.border = "1px solid orange";
  }
});

OR shorthand:

document.addEventListener("DOMContentLoaded", () => {
  const qs = document.querySelector("section p:first-of-type");
  
  // The ?. checks if qs is null before trying to access .style
  qs?.style.setProperty("border", "1px solid orange");
});

*/

//Using a loop to change CSS on particular types of tags

document.addEventListener("DOMContentLoaded", function () {
  const tagName = document.getElementsByTagName("h1");
  for (let i = 0; i < tagName.length; i++) {
    tagName[i].style.textDecoration = "underline";
  }
});

//Using classlist toggle and eventlistener to click css on and off

const toggle = document.querySelector(".class-list-toggle");
toggle.addEventListener("click", function () {
  this.classList.toggle("class-list-off");
});

//Adding new elements and content with createElement, createTextNode and insertBefore

document.addEventListener("DOMContentLoaded", addElement);
function addElement() {
  const newDiv = document.createElement("div"); //making the new div
  newDiv.classList.add("new-div"); //adding the class to the div
  const newHeading = document.createElement("h3"); //adding the h3
  const newParagraph = document.createElement("p"); //adding the p
  const newHContent = document.createTextNode(
    "Adding new elements and content with createElement, createTextNode and insertBefore",
  ); //inserting the h3 text
  const newPContent = document.createTextNode(
    "Once the DOM content loads, the new elements are created using createElement (div with h3 and p inside it). The heading and paragraph are given text with createTextNode. Finally, they are linked together using appendChild and inserted after an element with the class called class-list-toggle by specifying it's after the existing div's nextSibling. By using classList.add, the green font color applies from the selected CSS class.",
  ); //inserting the p text
  newHeading.appendChild(newHContent); //put heading text inside heading
  newParagraph.appendChild(newPContent); //put paragraph text inside paragraph
  newDiv.appendChild(newHeading); //put heading inside div
  newDiv.appendChild(newParagraph); //put paragraph inside div
  const existingDiv = document.querySelector(".class-list-toggle"); //get an existing element
  document.body.insertBefore(newDiv, existingDiv.nextSibling); //insert after new div (it's BEFORE THE NEXT SIBLING OF THE EXISTING DIV)
} //alternative to insertBefore is insertAdjacentElement
