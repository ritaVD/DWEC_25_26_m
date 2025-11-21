import { canciones } from '../db/db';

// hacer variables para cosas como playlists o catalogo

const recuperarMapLocalStorage = (clave) => {
    const datos = localStorage.getItem(clave);
    if(!datos) {
        return new Map()
    }

    // parseamos
    return new Map(JSON.parse(datos));
};

function guardarMapStorage (clave, myMap){
    //convierto el map a array
    const arrayDesdeMap = Array.from(myMap);
    //guardamos JSON.stringify
    localStorage.setItem(clave, JSON.stringify(arrayDesdeMap))

}

function guardarSetLocalStorage (clave, mySet){
    const arrayDesdeSet = Array.from(mySet);
    localStorage.setItem(clave, JSON.stringify(arrayDesdeSet))
}

function recuperarSetLocalStorage (clave){

}

export function crearCatalogo () {
    const catalogo = new Map();
    canciones.forEach(cancion => {
         const cancionCompleta = {
            ...cancion, 
            historialReproduccion : []
        }
        catalogo.set(cancion.id, cancionCompleta)
    });
    guardarMapStorage('catalogo', catalogo);

    console.log(`Catalogo creado con ${catalogo.size} canciones`)

   // localStorage.setItem('catologo', JSON.stringify(catalogo)) || [];

    return catalogo;
}

export const reproducirCancion = (idCancion) => {

    //hacer try catch
    const catalogo =  recuperarMapLocalStorage('catalogo')//JSON.parse(localStorage.getItem('catalogo')) || [];
    if (!catalogo.has(idCancion)){
        throw new Error(`La cancion con ${idCancion} no exitse`)
    
    }

    const cancionReproducida = catalogo.get(idCancion);
    cancionReproducida.reproducirCancion ++;
    cancionReproducida.historialReproduccion.push({
        fecha : new Date().toISOString,
        timestamp : Date.now()
    })
    catalogo.set(idCancion, cancionReproducida)
    // guardo catalogo en localStorage
    console.log(`Reproduciendo: ${cancionReproducida.titulo}`)
    return cancionReproducida;

}

export const gestionarPlaylist = () => {
     // 1️⃣ Recuperamos lo que haya guardado el usuario en localStorage
     // localStorage solo guarda texto, por eso lo convertimos con JSON.parse
     // Si no hay nada guardado todavía, usamos un array vacío []
    const guardado = new Map(
        JSON.parse(localStorage.getItem("playlists") || "[]")
      .map(([nombre, ids]) => [nombre, new Set(ids)]) // ****

    );

    // VERSION PROFESOR 
    

    /*

    const playlist = playlist 
    recuperamor la playlist
    const playlist = recuperamosMapLocalStorage(playlist);  // [nombre, ids]

    const playListConSets = new Map ();

    for (cons [nombre, ids] of playlist){
        playListConSets.set(nombre, new Set(ids));
    }


    const playListParaGuardar = new Map();
    for (cosnt [nombre, setIds] of playListConSets){
    }
    guardarMapStorage(PLAYLIST, playListParaGuardar)

    guardar la playlist en el localStorage
    const guardar = () => {
        return {
        }
    }
    */

    // 2️⃣ Creamos un Map a partir de lo guardado
    // Cada elemento del array guardado tiene forma ["nombre", [1,2,3]]
    // Convertimos esos arrays en Map con Set dentro (para no repetir canciones)
    let playlists = new Map(
    guardado.map(([nombre, ids]) => [nombre, new Set(ids)])
    );

    // 3️⃣ Función para guardar los cambios en localStorage
    const guardar = () => {
    // Convertimos el Map en un array normal
    // Ejemplo: [["Favoritas", [1,2,3]], ["Rock", [4,5]]]
    const array = [...playlists.entries()].map(([nombre, set]) => [nombre, [...set]]); //que

    // Lo guardamos en localStorage como texto
    localStorage.setItem("playlists", JSON.stringify(array));

    const crear = (nombrePlaylist) => {
        // Si ya existe, no la creamos otra vez
       if (playlists.has(nombrePlaylist)) {
          console.log("❌ Esa playlist ya existe");
          return false;
       }

       // Si no existe, la añadimos al Map con un Set vacío
       playlists.set(nombrePlaylist, new Set());

       // Guardamos los cambios en localStorage
       guardar();

       console.log("✅ Playlist creada:", nombrePlaylist);
       return true;



    }
    const agregar = (nombrePlaylist, idCancion) => {
        // Si ya existe, no la creamos otra vez
       if (!playlists.has(nombrePlaylist)) {
          console.log("No existe");
          return false;
       }

       // esta la cancion en mi catalago?
       /*
       const catalogo = recuperarMapLocalStorage(catalogo);
       if(!catalolo.has(idCancion)){
         clg('Cancion no disponible')
         return false
       }
       */

       // 2️⃣ Obtener el Set de canciones de esa playlist
       const setCanciones = playlists.get(nombrePlaylist); // saca los ids de las canciones

        if (setCanciones.has(idCancion)) {
        console.log("⚠️ La canción ya estaba en la playlist");
        return false;
        }
        // añadimos la cancion al set

       setCanciones.setItem(idCancion);

       guardar();

       return true; 
    }

    const eliminar = (nombrePlaylist, idCancion) => {
        if (!playlists.has(nombrePlaylist)){
            console.log('')
        }
        const canciones = playlists.get(nombrePlaylist);
        const quitada = playlists.delete(idCancion);
    
        guardar();
        return true;
    }

    const obtener = (nombrePlaylist) => {
        if(!playlists.has(nombrePlaylist)){
            console.log('error')
        }
        const setCanciones = playlists.get(nombrePlaylist);
        const arrayCanciones = [...setCanciones].map(id => 
            canciones.find (c => c.id === id)
        );
        return arrayCanciones;
        
    }
    const listar = () => {
        return Array.from(playlists.keys())
        
    }


}}


// funcion que le pasa como parametro artista y 
// me devuelva el nombre de todas las canciones que tiene dicho artista

function buscarPorArtsita (artista){
 return canciones
        .filter(c => c.artista.toLowerCase === artista.toLowerCase)

}


//crear funcion que le pase como parametro max o min y obtenga
// ordenadas por el nombre de la cancion las cinco canciones mas o 
//menos reproducidas 

export const reproduccionesMaxMin = (modo = "max") => {
  if (modo !== "max" && modo !== "min") {
    throw new Error("Modo incorrecto");
  }
  const prueba = canciones;

  const songs = [...canciones].sort((a, b) => {
    if (modo === "max") {
      return b.reproducciones - a.reproducciones;
    } else {
      return a.reproducciones - b.reproducciones;
    }
  });

  const top5 = songs.slice(0, 5);
  top5.sort((a, b) => a.nombre.localeCompare(b.nombre));

  return top5;
};


// crear una funcion reset que ponga todos los contadores de las canciones a 0

function reset () {  
    for (const cancion of canciones) {
    cancion.reproducciones = 0;
  }
}

//crear una funcion totalReproducciones que obtenga el total de reproducciones 
// de mi catalogo musical

function totalReproducciones2 (){
    return canciones
     .reduce((acc, cancion)=> acc+cancion.reproducciones, 0)

}
