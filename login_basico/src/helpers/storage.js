import { ENV } from "../config/env";


// Crear una función llamada initialStorage que reciba array de usuarios y los guarde en el localStorage  CORREGIDO
/**
 * @author: 
 * @param {array} arrayUsers 
 * @returns {array} 
 */
export const initialStorage = (arrayUsers = []) =>  {
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
    console.log(`${ENV.VITE_STORAGE_KEY}: Usuarios guardados correctamente`)
}

// crear una función llamada getUsuarios(key) que se traiga todos los usuarios que hay almacenados en la clave key 
export const getUsuarios0= (arrayUsers = []) => {
    localStorage.getItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
}

//correción getUsuarios()
/**
 * 
 * @returns 
 */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY)) || [];
}

// crear una funcion llamada setUsuarios(usuario) y lo guarde en el localStorage en la key del .env 
export function setUsuarios0(user) {
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(user));
}
// correción 
/**
 * 
 * @param {*} user 
 */
export const setUsers1 = (user) => {
    const users = getUsers();
    users.push(user);
    initialStorage(users);
}
// correcion pro
/**
 * 
 * @param {*} user 
 */
export const setUsers = (user) => {
    initialStorage([...getUsers(), user])
}
