document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".gallery-item img");

  images.forEach(img => {
    img.addEventListener("click", () => {

      // Si NO está en fullscreen → entrar
      if (!document.fullscreenElement) {
        if (img.requestFullscreen) {
          img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) { // Safari
          img.webkitRequestFullscreen();
        } else if (img.msRequestFullscreen) { // Edge antiguo
          img.msRequestFullscreen();
        }
      }
      // Cuando ya esté en fullscreen se podrá salir 
      else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

    });
  });

});
