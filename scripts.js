let carrito = [];
let total = 0;

function agregarAlCarrito(productoId) {
    const producto = {
        id: productoId,
        nombre: `Producto ${productoId}`,
        precio: productoId === 1 ? 20.00 : 25.00
    };

    carrito.push(producto);
    total += producto.precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById('carrito');
    const totalElement = document.getElementById('total');

    carritoList.innerHTML = '';
    totalElement.textContent = total.toFixed(2);

    carrito.forEach((producto) => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        carritoList.appendChild(item);
    });
}

function realizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de comprar.");
        return;
    }

    // Aquí podrías agregar lógica para procesar la compra, como enviar datos a un servidor, gestionar el pago, etc.
    alert("¡Compra realizada con éxito! Gracias por tu compra.");
    carrito = [];
    total = 0;
    actualizarCarrito();
}

