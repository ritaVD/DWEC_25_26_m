import { crearCatalogo, reproducirCancion, gestionarPlaylist, construirIndiceBusqueda } from "./helpers/bibliotecaMusical";
export function app() {
  // 1️⃣ Crear catálogo de canciones
  crearCatalogo();

  // 2️⃣ Inicializar el gestor de playlists
  const sistema = gestionarPlaylist();

  // 3️⃣ Crear una nueva playlist
  sistema.crear('Favoritas');

  // 4️⃣ Agregar canciones por id
  sistema.agregar('Favoritas', 1);
  sistema.agregar('Favoritas', 2);
  sistema.agregar('Favoritas', 3);

  // 5️⃣ Intentar agregar repetida (debe avisar)
  sistema.agregar('Favoritas', 2);

  // 6️⃣ Listar todas las playlists
  console.log('Playlists:', sistema.listar());

  // 7️⃣ Obtener las canciones de una playlist
  console.log('Canciones de Favoritas:', sistema.obtener('Favoritas'));

  // 8️⃣ Eliminar una canción
  sistema.eliminar('Favoritas', 2);

  // 9️⃣ Verificar que se eliminó
  console.log('Favoritas tras eliminar canción 2:', sistema.obtener('Favoritas'));

  // 🔟 Reproducir una canción para probar el historial
  reproducirCancion(1);

  const indice = construirIndiceBusqueda()
  console.log("Índice generado correctamente ✅");
  console.log(indice);
}


export default app;