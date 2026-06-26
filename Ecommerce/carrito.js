const STORAGE_KEY = 'cart';
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function initLocalStorage() {
    if(!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

function saveLocalStorage(item) {
    let cart = getFromLocalStorage();
    item.cantidad = 1;
    cart.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    renderCarrito();
    Swal.fire({
        title: '¡Producto agregado!',
        icon: 'success',
        timer: 1500
    });
}

function renderCarrito() {
    let cart = getFromLocalStorage();
    let offcanvasBody = document.getElementById('offcanvasBody');
    
    offcanvasBody.innerHTML = '';
    
    if (cart.length === 0) {
        offcanvasBody.innerHTML = '<p class="text-center">El carrito está vacío</p>';
        return;
    }
    
    cart.forEach(producto => {
        let item = document.createElement('div');
        item.classList.add('d-flex', 'align-items-center', 'gap-3', 'mb-3', 'border', 'p-2');
        item.innerHTML = `
            <img src="${producto.image}" style="width: 60px; height: 60px; object-fit: contain;">
            <div>
                <p class="mb-0 fw-bold">${producto.title}</p>
                <p class="mb-0">USD $${producto.price}</p>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-dark" id="decrement-${producto.id}">-</button>
                    <span id="cantidad-${producto.id}">${producto.cantidad}</span>
                    <button class="btn btn-sm btn-dark" id="increment-${producto.id}">+</button>
                    <button class="btn btn-sm btn-danger" id="eliminar-${producto.id}">🗑️</button>
                </div>
                <p class="mb-0 fw-bold" id="total-${producto.id}">Total: USD $${(producto.price * producto.cantidad).toFixed(2)}</p>
            </div>
        `;
        offcanvasBody.appendChild(item);

        // Eventos botones
        document.getElementById(`increment-${producto.id}`).addEventListener('click', () => {
            producto.cantidad++;
            actualizarCarrito(cart);
            renderCarrito();
        });

        document.getElementById(`decrement-${producto.id}`).addEventListener('click', () => {
            if(producto.cantidad > 1) {
                producto.cantidad--;
                actualizarCarrito(cart);
                renderCarrito();
            }
        });

        document.getElementById(`eliminar-${producto.id}`).addEventListener('click', () => {
            cart = cart.filter(p => p.id !== producto.id);
            actualizarCarrito(cart);
            renderCarrito();
        });
    });
}

function actualizarCarrito(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

initLocalStorage();
renderCarrito();