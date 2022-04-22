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
app.use("/api/carrito", routerCarrito);
routerProductos.use(express.json());
routerCarrito.use(express.json());

// admin
let admin = true;

//creo archivo que contiene los productos
const listaProducto = new Contenedor("./productos.txt");
const listaCarrito = new Contenedor("./carritos.txt");

//rutas productos ---------------------------------------------------------------------------
//get productos
routerProductos.get("/productos/:id?", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    const productos = await listaProducto.getAll();
    res.send(JSON.stringify(productos));
  } else {
    const idNum = parseInt(id);
    const productoConsultado = await listaProducto.getById(idNum);
    res.send(productoConsultado);
  }
});
// post de producto
routerProductos.post("/productos", async (req, res) => {
  const item = req.body;
  const productoNuevo = await listaProducto.save(item);
  res.redirect("/api/productos");
});

// rutas carro ----------------------------------------------

// get carros
routerCarrito.get("/:id?", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    const carritos = await listaCarrito.getAll();
    res.send(JSON.stringify(carritos));
  } else {
    const idNum = parseInt(id);
    const carritoConsultado = await listaCarrito.getById(idNum);
    res.send(carritoConsultado);
  }
});

//post carro
routerCarrito.post("/", async (req, res) => {
  // const item = JSON.stringify(req.body);
  const item = req.body;
  const carritoNuevo = await listaCarrito.save(item);
  res.redirect("/api/carrito");
});

// server ---------------------------------------------------
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
