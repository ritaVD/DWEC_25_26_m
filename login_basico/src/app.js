import { DB } from "./db/db";
import { initialStorage } from "./helpers/storage";
import { renderLoginForm } from "./views/loginView";

export function initialApp() {
    // iniciamos guardando los usuarios en localStorage
    initialStorage(DB)

    //pintamos/rederizamos mi formulario en 
    const app = document.getElementById("app");
    app.innerHTML = renderLoginForm();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");
    
    // pongo un escuchador de eventos al formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // comprobar si username y password son correctos.
        const { username, password } = Object.entries(new FormData(form)); 
        // crear funcion que valide username y password
        // son correctos usando las siguientes restricciones
        // - no vacias 
        // - password > caracteres
        // - username y password estan en el localStorage 
        //const ok = validarCredenciales(username, password)
        //message.innerHTML = ok 
        //?  `<span style = "green"> Bienvenido ${username}</span> ` 
        //:  `<span style = "red"> Credenciales incorrectas</span> `;
        form.reset();
    });

} 
//terminar el login mostrano en verde el login correcto y rojo incorrecto y 
// debajo hacer otro formulario para registrarse (register) permita registrarse con un usuario y password hasehado 
// y almacenarlo en el localstore 