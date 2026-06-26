const STORAGE_KEY = 'cart';
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function initLocalStorage() {
    if(!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

function saveLocalStorage(item) {
    let cart = getFromLocalStorage();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
        title: '¡Producto agregado!',
        icon: 'success',
        timer: 1500
     });
}

function getFromLocalStorage() {
    return JSON.parse((localStorage.getItem(STORAGE_KEY)));
}

initLocalStorage();