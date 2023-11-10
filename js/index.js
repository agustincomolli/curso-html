// Obtenemos el botón que abre la alerta personalizada al seleccionar por su id.
const btnOpenAlert = document.querySelector("#open-custom-alert");
// Obtenemos la alerta personalizada al seleccionar por su id.
const customAlert = document.querySelector("#custom-alert");
// Obtenemos el botón que cierra la alerta personalizada al seleccionar por su id.
const btnCloseAlert = document.querySelector("#close-custom-alert");

// Añade un 'event listener' para el evento 'click' en btnOpenAlert.
// Cuando se hace clic en btnOpenAlert, se llama a la función que muestra el cuadro de diálogo de la alerta personalizada.
btnOpenAlert.addEventListener("click", () => {
    // Aquí se muestra el cuadro de diálogo de la alerta personalizada.
    // 'showModal' es un método del elemento HTML <dialog>, que muestra el diálogo modal.
    // Sin embargo, este método no funciona en algunos navegadores, como Firefox, sin un polyfill.
    customAlert.showModal();
});

// Añade un 'event listener' para el evento 'click' en btnCloseAlert.
// Cuando se hace clic en btnCloseAlert, se llama a la función que oculta el cuadro de diálogo de la alerta personalizada.
btnCloseAlert.addEventListener("click", () => {
    // Aquí se cierra el cuadro de diálogo de la alerta personalizada.
    // 'close' es un método del elemento HTML <dialog>, que cierra el diálogo modal.
    customAlert.close();
});