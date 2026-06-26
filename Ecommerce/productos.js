const contenedorProductos = document.getElementById('contenedorProductos')

function getProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
};


getProducts().then(data => {
    renderCards(data);
});

function renderCards(productos) {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
         const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" class="card-image" style="height: 300px;object-fit: contain"> 
        <div class="card-content justify-content-center align-items-center" style="width: 300px; padding: 10px;">
            <h3 class="card-title text-truncate">${producto.title}</h3>
            <div class="mb-3">
            <button class="btn btn-dark" id="btn-${producto.id}"> Mas detalles </button>
            </div>
      </div>
    `;

  col.appendChild(card);
  contenedorProductos.appendChild(col);


  let container = document.querySelector('#productmodal')
  let btn = document.querySelector(`#btn-${producto.id}`);

      btn.addEventListener('click', () => {
        container.innerHTML =  `
          <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="productmodalLabel">${producto.title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <img src="${producto.image}" class="img-fluid" alt="${producto.title}">
        <p>${producto.description}"</p>
      </div>
      <div class="modal-footer">
        Precio: <strong class"d-flex justify-content-end align-items-start"> USD $ ${producto.price} </strong>
        <button type="button" class="btn btn-primary" id="btn-agregar-${producto.id}" data-bs-dismiss="modal">Agregar a carrito</button> 
      </div>
    </div>
      </div>`;
      
        let btnAddToCart = document.querySelector(`#btn-agregar-${producto.id}`);
        btnAddToCart.addEventListener ('click', () => {
          console.log('guardando') 
          saveLocalStorage(producto);
        });

      const boostrapmodal = new bootstrap.Modal(container);
      boostrapmodal.show();
    });

});
}