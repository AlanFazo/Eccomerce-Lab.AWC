
getProducts().then((productos) => {
    let inputSearch = document.querySelector('#buscador');
    inputSearch.addEventListener('input', (event) =>{
        let query = event.target.value;
        if (query != ''){
          let result = productos.filter(producto => producto.title.toLowerCase().includes(query.toLowerCase()));
          renderCards(result);
          return;
        }
        else {
            renderCards(productos);
        }
    });
    renderCards(productos);
});