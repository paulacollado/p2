// Interceptar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Mostrar el mensaje de agradecimiento (popup)
    let modal = document.getElementById('thankYouMessage');
    modal.style.display = 'flex';

    // Opcional: Resetear el formulario después de enviarlo
    event.target.reset();
});

// Función para cerrar el modal cuando el usuario haga clic en "Cerrar"
function closeModal() {
    let modal = document.getElementById('thankYouMessage');
    modal.style.display = 'none';
}
