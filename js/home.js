function Home() {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Limpia contenido previo

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar producto...";
  buscador.addEventListener("input", () => {
    buscadorFuncion(buscador.value);
  });

  // Contenedor filtro por categoría (o alguna propiedad)
  // Como la API tiene categorías, las sacamos dinámicamente
  const categorias = [...new Set(productos.map(p => p.category?.name).filter(Boolean))];

  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("categorias-container");

  categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      filtroConexion(cat);
    });
    contenedorFiltro.appendChild(btn);
  });

  // Contenedor lista productos
  const contenedorProductos = document.createElement("div");
  contenedorProductos.id = "la-lista";
  contenedorProductos.innerHTML = generarLista(productos);

  // Agregar todo a root
  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorProductos);
}
