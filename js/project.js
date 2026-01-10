const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".projectCard");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("dataFilter");

    cards.forEach((card) => {
      const category = card.getAttribute("dataCategory");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
