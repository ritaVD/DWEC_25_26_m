const VITE_API_URL = import.meta.env.VITE_API_URL;
//crear una funcion una con promise y otra con async await que permita traerse
//  de jsonplaceholder.typicode.com/photos el title y la imagen

export function dataJSONPromise() {
  fetch(VITE_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la peticion al traer la data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("❌ Error ...", error);
    })
    .finally((message) => console.log("Cerrando JSONPromise"));
}

export const dataJSONAsync = async () => {
  try {
    const response = await fetch(VITE_API_URL);
    if (!response.ok) {
      throw new Error("Error en la peticion al traer la data");
    }
    const data = await response.json();
    const dataParseada = data.map((infoFoto) => {
      return {
        title: infoFoto.title,
        photo: infoFoto.thumbnailUrl,
      };
    });
    console.table(dataParseada);
  } catch (error) {
    console.log("❌ Error ...", error);
  }
};

//Crear una funcion que le pase por parameytro una ciudad y me devueva temperatura y humedad y viento actual usando la api de openweather




