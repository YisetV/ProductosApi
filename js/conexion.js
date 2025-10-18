function buscadorFuncion(texto) {
  if (texto.length >= 3) {
    const filtrados = productos.filter(p =>
      p.title.toLowerCase().includes(texto.toLowerCase())
    );
    document.getElementById("la-lista").innerHTML = generarLista(filtrados);
  } else {
    document.getElementById("la-lista").innerHTML = generarLista(productos);
  }
}

function filtroConexion(categoria) {
  const filtrados = productos.filter(p => p.category?.name === categoria);
  document.getElementById("la-lista").innerHTML = generarLista(filtrados);
}

function generarLista(arrayProductos) {
  if (arrayProductos.length === 0) {
    return "<p>No se encontraron productos.</p>";
  }

  return arrayProductos
    .map(
      p => `
    <div class="producto-item" onclick="Detalle(${p.id})" style="cursor:pointer; border:1px solid #ddd; padding:10px; margin:5px; border-radius:8px;">
      <img src="${p.images?.[0] || ''}" alt="${p.title}" style="width:100%; max-width:150px; object-fit:contain;" />
      <h3>${p.title}</h3>
      <p>Precio: $${p.price}</p>
      <p>${p.description.substring(0, 60)}...</p>
    </div>
  `
    )
    .join("");
}
