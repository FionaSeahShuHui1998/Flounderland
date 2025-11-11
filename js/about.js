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

pic.addEventListener("click", function () {
  openImageModal("/img/About.JPEG");
});

// Open modal
function openImageModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = src;
  modal.style.display = "flex";
}

// Close modal
function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Download resume
document.getElementById("resumeButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "files/Resume_FionaSeahShuHui.pdf";
  link.download = "Resume_FionaSeahShuHui.pdf";
  link.click();
});
