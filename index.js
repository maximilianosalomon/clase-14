// obtener productos
fetch("http://localhost:8080/api/productos")
  .then((response) => response.json())
  .then((json) => console.log(json));
// .catch((error) => {
//   console.log("Este es el error: " + error);
// });

// obtener html
// const divProductos = document.getElementById("listaProductos");

// // para mostrar productos
// for (const producto of productos) {
//   let productoCard = document.createElement("div");
//   //   productoParaInstertar.setAttribute();
//   productoParaInstertar.setAttribute("class", "card col-6 col-lg-3 m-2 p-1");
//   productoParaInstertar.innerHTML = `<p> Nombre: ${producto.nombre}</p>
//                                     <p> Precio: $${producto.precio}</p>`;
//   divProductos.appendChild(productoCard);
// }
