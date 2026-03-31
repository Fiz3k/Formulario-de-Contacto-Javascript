// Obtener elementos del DOM
const formulario = document.getElementById("formulario");
const estado = document.getElementById("estado");

// Evento submit del formulario
formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita envío automático

  // Validación nativa de HTML5
  if (!formulario.checkValidity()) {
    formulario.reportValidity(); // Muestra mensajes automáticos del navegador
    estado.textContent = "Por favor corrige los errores del formulario";
    return;
  }

  // Mensaje mientras se envía
  estado.textContent = "Enviando...";

  // Simulación de envío con promesa
  simularEnvio()
    .then((msg) => {
      estado.textContent = msg;
      formulario.reset(); // Limpia el formulario
    })
    .catch((error) => {
      estado.textContent = error;
    });
});

// Función que simula envío al servidor
function simularEnvio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% éxito

      if (exito) {
        resolve("Mensaje enviado correctamente");
      } else {
        reject("Error al enviar el mensaje. Intente nuevamente.");
      }
    }, 2000); // Espera de 2 segundos
  });
}