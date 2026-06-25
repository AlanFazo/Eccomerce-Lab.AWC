const contenedorProductos = document.getElementById('contenedorProductos')

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {renderCards(data);
});

function renderCards(productos) {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${producto.title}</h3>
            <p class="card-description">${producto.description}</p>
            <p class="card-price">${producto.price}</p>
      </div>
    `;

contenedorProductos.appendChild(card);
});
}