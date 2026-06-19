//getting the stored entry data from localStorage

const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];

//using the data to create blog entries for the home page

const container = document.querySelector("#card-container");

//the grid layout needs the cards arranged by class options

const cardPattern = ["card-1", "card-2", "card-2", "card-1"];

//reverse array so most recent entries show first

const recentFirstEntries = savedEntries.reverse();

//if there are hard coded cards, put the dynamic content before them

const hardCodeCard = container.querySelector(".card-1, .card-2");

recentFirstEntries.forEach((entry, index) => {
  const card = document.createElement("div");
  const cardClass = cardPattern[index % 4];
  card.className = cardClass;

  card.innerHTML = `
    <p>${entry.date}</p>
    <h2>${entry.title}</h2>
    <p>${entry.reflection}</p>
    <div class="tag-div">
    <p class="tag">${entry.tag}</p>
    </div>
    `;

  if (hardCodeCard) {
    hardCodeCard.insertAdjacentElement("beforebegin", card);
  } else {
    container.appendChild(card);
  }
});
