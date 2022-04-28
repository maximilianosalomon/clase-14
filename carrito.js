// obtener html
const itemContainer = document.getElementById("listaCarrito");

// eventos
document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

// obtener productos
const url = "http://localhost:8080/api/carrito";
let fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  showCards(data);
};

// para mostrar productos
const showCards = (data) => {
  for (const item of data) {
    let itemCard = document.createElement("div");
    itemCard.setAttribute("class", "card m-2 p-2");
    itemCard.innerHTML = `<p> Nombre: ${item.nombre}</p>
                        <p> Descripción: ${item.descripcion}</p>`;
    // <p> Precio: $${item.precio}</p>
    // <p> Stock: ${item.stock} u.</p>
    // <img src="${item.imagen}" alt="${item.nombre}">
    itemContainer.appendChild(itemCard);
  }
};
