
export function renderLoginForm(){
    return `
    <form id= "loginForm">
        <label> Username:  </label> 
        <input type = "text" id= "username" required></input>
        <label> Password: </label> 
        <input type= "password" id= "password" name= "password" required> </input>
    <button type = "submit"> Iniciar sesión</button>

    </form>
    <p id= "message"></p>
    `;
}

