async function Detalle(id) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const p = await res.json();

    document.getElementById("root").innerHTML = `
      <div class="detalle-producto" style="padding: 1em;">
        <button onclick="Home()" style="margin-bottom: 1em;">⬅ Volver</button>
        <h2>${p.title}</h2>
        <img src="${p.images?.[0] || ''}" alt="${p.title}" style="max-width:300px; width: 100%;"/>
        <p><strong>Precio:</strong> $${p.price}</p>
        <p><strong>Descripción:</strong> ${p.description}</p>
        <p><strong>Categoría:</strong> ${p.category?.name || 'Sin categoría'}</p>
      </div>
    `;
  } catch (error) {
    document.getElementById("root").innerHTML = `<p style="color:red;">❌ Error: ${error.message}</p>`;
  }
}
