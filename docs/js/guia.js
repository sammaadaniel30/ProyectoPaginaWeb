document.addEventListener("DOMContentLoaded", () => {

  // Banner 
  const banner = document.getElementById("mobile-banner");
  const closeBtn = document.getElementById("close-banner");

  closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
    document.body.style.paddingBottom = "0";
  });

  // Reproducir vídeos automaticamente al hacer scroll 

  const videos = document.querySelectorAll("iframe");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const iframe = entry.target;
      const src = iframe.dataset.src || iframe.src;

      if (entry.isIntersecting) {
        iframe.src = src + "?autoplay=1&mute=1";
      } else {
        iframe.src = src;
      }
    });
  }, {
    threshold: 0.5
  });

  videos.forEach(video => {
    video.dataset.src = video.src;
    observer.observe(video);
  });


});

