document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact-form");

  // Regex existentes
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+\d{1,3}\s?\d{6,12}$/;

  // Longitud de números por país (sin prefijo)
  const phoneLengths = {
    "+34": 9,   // España
    "+33": 9,   // Francia
    "+49": 10,  // Alemania (estándar)
    "+39": 9,   // Italia
    "+1": 10    // USA
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    form.querySelectorAll(".form-control").forEach(input => {

      const errorText = input.parentElement.querySelector(".error-text");
      input.classList.remove("error", "success");
      errorText.textContent = "";

      // 1️⃣ Campo vacío
      if (input.value.trim() === "") {
        input.classList.add("error");
        errorText.textContent = "Campo obligatorio";
        isValid = false;
        return;
      }

      // 2️⃣ Email
      if (
        input.id === "email" &&
        (!input.value.includes("@") || !emailRegex.test(input.value))
      ) {
        input.classList.add("error");
        errorText.textContent = "Correo no válido";
        isValid = false;
        return;
      }

      // 3️⃣ Teléfono (prefijo + longitud)
      if (input.id === "telefono") {

        const value = input.value.trim();

        // Formato general
        if (!phoneRegex.test(value)) {
          input.classList.add("error");
          errorText.textContent = "Formato: +34 612345678";
          isValid = false;
          return;
        }

        // Extraer prefijo (+34, +33...)
        const prefix = value.split(" ")[0];

        // Extraer solo números nacionales
        const number = value.replace(prefix, "").replace(/\s+/g, "");

        // Comprobar longitud según país
        if (phoneLengths[prefix]) {
          if (number.length !== phoneLengths[prefix]) {
            input.classList.add("error");
            errorText.textContent =
              `El número para ${prefix} debe tener ${phoneLengths[prefix]} dígitos`;
            isValid = false;
            return;
          }
        }
      }

      // ✔ Correcto
      input.classList.add("success");
    });

    // 4️⃣ Envío final
    if (isValid) {
      form.submit();
    }
  });
});
