//import
const express = require("express");

const app = express();
const routerProductos = express.Router();
const routerCarrito = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + "public"));
app.use("/api", routerProductos);
app.use("/api", routerCarrito);

// JSON
routerProductos.use(express.json());
routerCarrito.use(express.json());

// import
const Contenedor = require("./archivos");
const Item = require("./item");

// //creo archivo que contiene los productos
// const archivo = new Contenedor("./productos.txt");

// Productos
// en archivo txt

// rutas productos-----------------------------------------------------------------------

//todos los productos
routerProductos.get("/productos", (req, res) => {
  //   if (productos.length === 0) {
  //   res.send("Error: no hay productos!");
  // } else {
  //   res.send(JSON.stringify(productos, null, 10));
  // }
  res.send("HOLA! GET /productos");
});

//productos por id
routerProductos.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((producto) => producto.id === id);
  if (producto === undefined) {
    // res.send("Error no hay productos!");
    res.send(`Error: El id "${id}" no corresponde a un item existente`);
  } else {
    res.send(producto);
  }
});

// ingreso de producto
routerProductos.post("/productos", (req, res) => {
  const item = req.body;
  const ids = productos.map((producto) => producto.id);
  const maxId = Math.max(...ids);
  let newProd = {
    title: item.title,
    price: item.price,
    thumbnail: item.thumbnail,
    id: maxId + 1,
  };
  productos = [...productos, newProd];
  res.redirect("/api/productos");
});

//put prod id
routerProductos.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = req.body;
  const producto = productos.find((producto) => producto.id === id);
  producto.title = item.title;
  console.log(producto);
  res.send("es un put!");
});

//delete de producto x id
routerProductos.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  producto = productos.filter((producto) => producto.id != id);
  res.send(producto);
});

// rutas carrito---------------------------------------------------------------------
// get carrito
routerCarrito.get("/carrito", (req, res) => {
  res.send("HOLA! GET /carrito");
});

//Server ----------------------------------------------------------------------------
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
