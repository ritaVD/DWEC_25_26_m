import { canciones } from '../db/db';

function recuperarMapStorage (clave){
    const datos = localStorage.getItem(clave);
    if(!datos){
        return new Map();
    }   
    return new Map(JSON.parse(datos));
}

function guardarMapLocalStorage (clave, myMap){
    const arraydelMap = Array.from(myMap);
    localStorage.setItem(clave, JSON.stringify(arraydelMap));
    
}

function guardarMapDeSets (clave, mapDeSets) {
  const serializado = Array.from(mapDeSets, ([k, set]) => [k, Array.from(set)]);
  localStorage.setItem(clave, JSON.stringify(serializado));
}

function recuperarMapDeSets (clave) {
  const datos = localStorage.getItem(clave);
  if (!datos) return new Map();
  const parsed = JSON.parse(datos);
  const reconstruido = parsed.map(([k, arr]) => [k, new Set(arr)]);
  return new Map(reconstruido);
}





/*



function guardarMapSet (clave, myMapSet){
    const arrayMapSet = Array.from(myMapSet, ([k, set]=> (k,  Array.from[set])));
    localStorage.setItem(arrayMapSet);
}

function recuperarMapSer (clave){
    const datos = localStorage.getItem(clave);
    if(!datos){
        return new Map();
    }
    const parsear = JSON.parse(datos);
    const reconstruir = parsear.map(clave, (([k, arr]) => [k, new Set(arr)]))

    return new Map(reconstruir);
}


























function guardarMapSet (clave, myMapSet){
    const arrayMapSet = Array.from(myMapSet, (([k, set]) => [k, Array.from(set)]));
    localStorage.setItem(clave, JSON.STRINGLFY(arrayMapSet))
}

function recuperarMapSet (clave) {
    const datos = localStorage.getItem(clave);
    if(!datos){
        return new Map();
    }
    const parsear = JSON.parse(datos);
    const reconstrui = parsear.map(([k, arr]) => [k, new Set(arr)]);
    return new Map (reconstruir)
}
*/


export function crearCatalogo () {
    const catalogo = new Map();
    canciones.forEach(cancion => {
        const cancionCompleta = {
            ...cancion,
            historialReproduccion : []
        }
        catalogo.set(cancion.id, cancionCompleta)
        
    });
    guardarMapLocalStorage('catalogo', catalogo);

    return catalogo;

}

export function reproducirCancion (idCancion) {
    const catalogo = recuperarMapStorage('catalogo');

    if (!catalogo.has(idCancion)){
        throw new Error (`La cancion con el id ${idCancion} no existe`)
    }

    const cancionReproducida = catalogo.get(idCancion);
    cancionReproducida.reproducciones++;

    cancionReproducida.historialReproduccion.push({
    fecha : new Date().toISOString(),
    timestamp : Date.now()
    });

    //catalogo.set(idCancion, cancionReproducida);

    guardarMapLocalStorage('catalogo', catalogo);

    //console.log('');
    return cancionReproducida;

}


// SISTEMAS DE PLAYLISTS CON SET
export function gestionarPlaylist() {
    const playlists = recuperarMapDeSets('playlists');

    const crear = (nombrePlaylist) => {
        if(playlists.has(nombrePlaylist)){
            console.log('Esta playlist ya existe')
            return false;
        }
        playlists.set(nombrePlaylist, new Set());
        guardarMapDeSets('playlists', playlists)
        console.log('Playlist creada')
        return true;

    }

    const agregar = (nombrePlaylist, idCancion) => {
        const catalogo = recuperarMapStorage('catalogo');
        if(!playlists.has(nombrePlaylist)){
            console.log('Esta playlist no existe');
            return false;
        }
        if(!catalogo.has(idCancion)){
            console.log('la cancion no existe');
            return false;
        }
        
       const setCanciones = playlists.get(nombrePlaylist); 

        if (setCanciones.has(idCancion)) {
        console.log(" La canción ya estaba en la playlist");
        return false;
        }
    
       setCanciones.add(idCancion);

       guardarMapDeSets('playlists', playlists);
       return true;

    };

    const eliminar = (nombrePlaylist, idCancion) => {
        if(!playlists.has(nombrePlaylist)){
            console.log('La playlist no existe')
            return false;

        }

        const setCanciones = playlists.get(nombrePlaylist);
        if (!setCanciones.has(idCancion)){
            console.log('Esta cancion ya no estaba')
            return false;
        }
        setCanciones.delete(idCancion);
        guardarMapLocalStorage('playlists', playlists)
        return true;
    }

    const obtener = (nombrePlaylist) => {
        if (!playlists.has(nombrePlaylist)){
            console.log('La playlist no existe')
        }
        const catalogo = recuperarMapStorage('catalogo');
        const ids = playlists.get(nombrePlaylist);

        const canciones = [];
        ids.forEach((id) => {
            if(catalogo.has(id)){
                canciones.push(catalogo.get(id));
            }
        })

        return canciones;


    };

    const listar = () => {
        return Array.from(playlists.keys());
    }
    

    return {
        crear,
        agregar,
        eliminar,
        obtener,
        listar
    };

}

export function construirIndiceBusqueda(catalogo = null) {
  function construirIndiceBusqueda(catalogo = null) {
  // --- CARGA ROBUSTA DEL CATÁLOGO ---
  const raw = catalogo ?? JSON.parse(localStorage.getItem('catalogo')) ?? [];

  // Si viene como [[id, {obj}], [id, {obj}], ...] (Map serializado),
  // lo convertimos a [{id, ...obj}, ...]
  const canciones = (Array.isArray(raw) && raw.length && Array.isArray(raw[0]) && raw[0].length === 2)
    ? Array.from(new Map(raw), ([id, obj]) => ({ id, ...obj }))
    : raw;

  // ... (el resto de la función igual: crear Map indice, helpers limpiar/add, bucle, guardar, return)
}

  // 2) Map de índice invertido: termino -> Set de IDs
  const indice = new Map();

  // Helper: limpia, pasa a minúsculas y quita acentos y signos
  const limpiar = (txt) => txt
    .toString()
    .toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')   // quita acentos
    .replace(/[(){}\[\].,;:!?'"´`^~_/\\-]/g, ' ')      // fuera signos/paréntesis
    .replace(/\s+/g, ' ')                               // espacios múltiples -> uno
    .trim();

  // Helper: añade id al Set del término
  const add = (termino, id) => {
    if (!termino) return;
    const set = indice.get(termino) ?? new Set();
    set.add(id);
    indice.set(termino, set);
  };

  // 3) Extraer términos de titulo, artista, album (por palabras),
  //    genero (tal cual) y año (a string)
  for (const c of canciones) {
    const id = c.id ?? c.ID ?? c.idCancion;
    if (id == null) continue;

    // titulo, artista, album -> palabras
    [c.titulo, c.artista, c.album]
      .filter(Boolean)
      .flatMap(txt => limpiar(txt).split(' '))
      .filter(Boolean)
      .forEach(t => add(t, id));

    // genero -> término completo
    if (c.genero) add(limpiar(c.genero), id);

    // año -> string
    const anyo = c.año ?? c.anio ?? c.year;
    if (anyo != null) add(limpiar(String(anyo)), id);
  }

  // 4) Guardar en localStorage
  guardarMapDeSets('indiceBusqueda', indice);

  // 5) Devolver el Map
  return indice;
}

function buscarCanciones (termino, filtros = {}){
    const indice = recuperarMapDeSets('indiceBusqueda');
    if (!indice || indice.size === 0) {
    console.warn('El índice de búsqueda está vacío o no existe');
    return [];
    }
    const terminoMin = termino.toLowerCase();

    const resultado = indice
      .find(term => term.includes(terminoMin));
    const cancion = new Set(indice.canciones);



    

}