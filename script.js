const loginBtn = document.getElementById('loginBtn');
const cartBtn = document.getElementById('cartBtn');
const loginModal = document.getElementById('loginModal');
const cartModal = document.getElementById('cartModal');
const closeButtons = document.querySelectorAll('.close');

// Abrir modal de login
if (loginBtn && loginModal) {
  loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
  });
}

// Abrir modal de carrito y mostrar productos
if (cartBtn && cartModal) {
  cartBtn.addEventListener('click', () => {
    mostrarCarrito();
    cartModal.classList.remove('hidden');
  });
}

// Cerrar modales
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    cartModal.classList.add('hidden');
  });
});

// Agregar producto al carrito
document.querySelectorAll('.agregar-carrito').forEach(btn => {
  btn.addEventListener('click', function() {
    const producto = {
      id: this.dataset.id,
      nombre: this.dataset.nombre,
      img: this.dataset.img // <-- importante para mostrar la imagen en el carrito
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
  });
});

// Mostrar productos en el carrito
// Mostrar productos en el carrito
function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const lista = document.getElementById('carrito-lista');
  if (!lista) return;
  lista.innerHTML = '';
  if (carrito.length === 0) {
    lista.innerHTML = '<li>No hay productos en el carrito.</li>';
    return;
  }
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;margin-right:10px;vertical-align:middle;">
      <span>${producto.nombre}</span>
    `;
    lista.appendChild(li);
  });
}

// Cerrar modal del carrito (puedes llamarlo desde el botón "Cerrar" en el modal)
function cerrarCarrito() {
  cartModal.classList.add('hidden');
}