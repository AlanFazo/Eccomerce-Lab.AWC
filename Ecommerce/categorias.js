fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(categorias => {
        renderCategorias(categorias);
    });

function renderCategorias(categorias) {
    let contenedorCategorias = document.getElementById('contenedorCategorias');
    contenedorCategorias.innerHTML = '';
    let btnTodas = document.createElement('button');
    btnTodas.classList.add('btn', 'btn-dark');
    btnTodas.textContent = 'Todas';
    contenedorCategorias.appendChild(btnTodas);
    categorias.forEach(categoria => {
        let btn = document.createElement('button');
        btn.classList.add('btn', 'btn-dark');
        btn.textContent = categoria;
        contenedorCategorias.appendChild(btn);
    });
}

getProducts().then((productos) => {
    let categorySearch = document.querySelector('#contenedorCategorias');
    categorySearch.addEventListener('click', (event) =>{
        let query = event.target.textContent;
        if (query === 'Todas'){
            renderCards(productos);
        }
        else if (query != ''){
          let result = productos.filter(producto => producto.category.toLowerCase().includes(query.toLowerCase()));
          renderCards(result);
          return;
        }
    });
    renderCards(productos);
});