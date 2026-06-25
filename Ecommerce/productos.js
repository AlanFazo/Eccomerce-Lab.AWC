const contenedorProductos = document.getElementById('contenedorProductos')

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

data.forEach(producto => {
    const {id, title, price, description, image, category}
}); 