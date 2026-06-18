/*ellipsis toggle on card to reveal more content*/

const container = document.getElementById("card-container");

container.addEventListener("click", function (event) {
  //   const button = event.target.closest("div").querySelector("button.card-ellipsis");

  //   if (!button) return;

  //   const card = button.closest(".card");

  //   card.classList.toggle(".is-open");

  const card = event.target.closest("div").querySelector("p.more-content");
  card.classList.toggle("is-open");
});
