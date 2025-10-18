let productos = [];

async function cargarProductos() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    productos = await res.json();
    Home();
  } catch (error) {
    console.error("❌ Error al cargar productos:", error);
  }
}

cargarProductos();