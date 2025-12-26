document.addEventListener("DOMContentLoaded", () => {

  // Leer una cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  // Crear una cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("accept-cookies");

  // Si ya aceptó cookies, no mostrar aviso
  if (getCookie("cookiesAccepted") === "true") {
    overlay.style.display = "none";
  }

  // Al aceptar cookies
  acceptBtn.addEventListener("click", () => {
    setCookie("cookiesAccepted", "true", 365);
    overlay.style.display = "none";
  });

});