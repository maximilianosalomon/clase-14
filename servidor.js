// import
const Contenedor = require("./archivos");
const Item = require("./backup/item OLD");

//init
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// router
const routerProductos = express.Router();
const routerCarrito = express.Router();
app.use("/api", routerProductos);
app.use("/api", routerCarrito);
routerProductos.use(express.json());
routerCarrito.use(express.json());

//creo archivo que contiene los productos
const archivo = new Contenedor("./productos.txt");
// const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");

//rutas productos ---------------------------------------------------------------------------
//get productos
routerProductos.get("/productos/:id?", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    const productos = await archivo.getAll();
    res.send(JSON.stringify(productos, null, 10));
  } else {
    const idNum = parseInt(id);
    const productoConsultado = await archivo.getById(idNum);
    res.send(productoConsultado);
  }
});
// // post de producto
// routerProductos.post("/productos", async (req, res) => {
//   const item = req.body;
//   const productoNuevo = await archivo.save(item);
//   // const ids = productos.map((producto) => producto.id);
//   // const maxId = Math.max(...ids);
//   // let newProd = {
//   //   title: item.title,
//   //   price: item.price,
//   //   thumbnail: item.thumbnail,
//   //   id: maxId + 1,
//   // };
//   // productos = [...productos, newProd];
//   res.redirect("/api/productos");
// });

// rutas carro ----------------------------------------------

// server ---------------------------------------------------
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
