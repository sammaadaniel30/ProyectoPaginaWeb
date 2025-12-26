document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("mobile-banner");
  const closeBtn = document.getElementById("close-banner");

  closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
    document.body.style.paddingBottom = "0";
  });
});

