import { DB } from "./db/db";
import { initialStorage } from "./helpers/storage";
import { renderLoginForm } from "./views/loginView";
import { validateCredentials } from "./services/authServices";
import { renderRegisterForm } from "./views/registerView";
import bcrypt from "bcryptjs";

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
        // Obtenemos los valores directamente de los inputs
        const usernameInput = form.querySelector('input[name="username"]');
        const passwordInput = form.querySelector('input[name="password"]');

        const username = String(usernameInput.value || "");
        const password = String(passwordInput.value || "");

        const ok = validateCredentials(username, password);

        message.textContent = ok
        ? `Login correcto: ${username}`
        : `Credenciales incorrectas`;
         message.style.color = ok ? "green" : "red";

        form.reset();

    });

} 
//terminar el login mostrano en verde el login correcto y rojo incorrecto y 
// debajo hacer otro formulario para registrarse (register) permita registrarse con un usuario y password hasehado 
// y almacenarlo en el localstore 
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = formRegister.querySelector('input[name="username"]');
    const passwordInput = formRegister.querySelector('input[name="password"]');

    const username = String(usernameInput.value || "").trim();
    const password = String(passwordInput.value || "").trim();

    if (!username || !password || password.length < 3) {
      messageRegister.textContent = "Datos inválidos";
      messageRegister.style.color = "red";
      return;
    }

    const users = getUsers();
    const exists = users.some((u) => u.username === username);
    if (exists) {
      messageRegister.textContent = "El usuario ya existe";
      messageRegister.style.color = "red";
      return;
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id || 0)) + 1 : 1,
      username,
      passwordHash,
      rol: "invitado",
    };

    setUsers(newUser);
    messageRegister.textContent = `Usuario ${username} registrado correctamente`;
    messageRegister.style.color = "green";
    formRegister.reset();
  });

