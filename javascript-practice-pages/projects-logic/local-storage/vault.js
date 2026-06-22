//getting the stored entry data from localStorage

const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];

//ellipsis toggle on card to reveal more content

const container = document.querySelector("#card-container");

container.addEventListener("click", function (event) {
  const card = event.target.closest("div").querySelector("p.more-content");
  card.classList.toggle("is-open");
});

//reverse array so most recent entries show first

const recentFirstEntries = savedEntries.reverse();

//if there are hard coded cards, put the dynamic content before them

const hardCodeCard = container.querySelector(".card");

recentFirstEntries.forEach((entry, index) => {
  const card = document.createElement("div");
  card.classList = "card";

  card.innerHTML = `<p class="card-date-tag"><span class="date">${entry.date}</span><span class="tag">${entry.tag}</span></p>
    <p class="card-title">${entry.title}</p>
    <p class="card-content">${entry.reflection}</p>
    <p class="more-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
              <button class="card-ellipsis" aria-label="toggle content">
              <i class="fa-solid fa-ellipsis" aria-hidden="true"></i>
            </button>
    </div>`;

  if (hardCodeCard) {
    hardCodeCard.insertAdjacentElement("beforebegin", card);
  } else {
    container.appendChild(card);
  }
});
