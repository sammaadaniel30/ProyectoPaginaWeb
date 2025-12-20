document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;

  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

});