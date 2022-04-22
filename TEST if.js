if (isNaN(id) || id === 1) {
  const carritos = await listaCarrito.getAll();
  res.send(JSON.stringify(carritos));
} else {
  const idNum = parseInt(id);
  const carritoConsultado = await listaCarrito.getById(idNum);
  res.send(carritoConsultado);
}

if (id === 1 || id > 1) {
  const idNum = parseInt(id);
  const carritoConsultado = await listaCarrito.getById(idNum);
  res.send(carritoConsultado);
} else {
  const carritos = await listaCarrito.getAll();
  res.send(JSON.stringify(carritos));
}
