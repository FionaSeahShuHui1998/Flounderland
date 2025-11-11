const pic = document.querySelector(".profilePic");
const tooltip = document.getElementById("hoverOverText");

pic.addEventListener("mousemove", function (e) {
  const rect = pic.getBoundingClientRect();

  tooltip.style.left = e.clientX - rect.left + 15 + "px";
  tooltip.style.top = e.clientY - rect.top + 15 + "px";

  tooltip.style.opacity = 1;
});

pic.addEventListener("mouseleave", function () {
  tooltip.style.opacity = 0;
});
