//getting the stored entry data from localStorage

const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];

/*ellipsis toggle on card to reveal more content*/

const container = document.getElementById("card-container");

container.addEventListener("click", function (event) {
  const card = event.target.closest("div").querySelector("p.more-content");
  card.classList.toggle("is-open");
});
