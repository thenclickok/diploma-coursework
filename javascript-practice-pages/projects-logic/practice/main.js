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
