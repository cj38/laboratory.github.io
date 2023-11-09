// Validación del formulario de contacto
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !correo || !mensaje) {
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        // Aquí puedes agregar código para enviar el formulario o realizar otras acciones.
        alert('Formulario enviado con éxito. Gracias por contactarnos.');
        formulario.reset();
    }
});
