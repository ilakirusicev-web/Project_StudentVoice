let stars = document.querySelectorAll(".rating_star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    star.textContent = "⭐";
  });
});

