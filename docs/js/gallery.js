document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "../media/imgs/IMG_REPO1.png",
    "../media/imgs/IMG_REPO2.png",
    "../media/imgs/IMG_REPO3.png",
    "../media/imgs/IMG_REPO4.png",
    "../media/imgs/IMG_REPO5.png",
    "../media/imgs/IMG_REPO6.png"
  ];

  let currentIndex = 0;

  const overlay = document.getElementById("galleryOverlay");
  const overlayImage = document.getElementById("overlayImage");
  const closeBtn = document.getElementById("closeGallery");
  const prevBtn = document.getElementById("prevImg");
  const nextBtn = document.getElementById("nextImg");

  // Abrir lightbox desde cualquier imagen
  const mosaic = document.getElementById("galleryMosaic");

    mosaic.addEventListener("click", (e) => {

      
      const moreCard = e.target.closest(".more-images");
      if (moreCard) {
        currentIndex = 2; 
        openOverlay();
        return;
      }

      
      const img = e.target.closest("img");
      if (!img) return;

      const idx = img.dataset.index;
      if (idx === undefined) return;

      currentIndex = parseInt(idx, 10);
      openOverlay();
    });

  function openOverlay() {
    overlayImage.src = images[currentIndex];
    overlay.classList.remove("hidden");
  }

  function closeOverlay() {
    overlay.classList.add("hidden");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    overlayImage.src = images[currentIndex];
  }

  function showPrev() {
    currentIndex =
      (currentIndex - 1 + images.length) % images.length;
    overlayImage.src = images[currentIndex];
  }

  closeBtn.addEventListener("click", closeOverlay);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Teclado (ESC, flechas)
  document.addEventListener("keydown", e => {
    if (overlay.classList.contains("hidden")) return;

    if (e.key === "Escape") closeOverlay();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

});
