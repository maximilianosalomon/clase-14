// import
const Contenedor = require("./archivos");
const Item = require("./backup/item OLD");

//init
const express = require("express");
const app = express();
// app.use(express.json)
// app.use(express.urlencoded({extended:true}))

// router
const routerProductos = express.Router();
app.use("/api", routerProductos);
routerProductos.use(express.json());

//creo archivo que contiene los productos
const archivo = new Contenedor("./productos.txt");
const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");

//rutas productos ---------------------------------------------------------------------------
//get productos
routerProductos.get("/productos/:id?", async (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    const productos = await archivo.getAll();
    res.send(JSON.stringify(productos, null, 10));
  } else {
    res.send(`Este es el id: ${id}`);
  }
});

// rutas carro ----------------------------------------------

// server ---------------------------------------------------
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
