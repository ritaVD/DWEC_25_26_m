import { getUsers } from "../helpers/storage";
import bcrypt from "bcryptjs"




export default function validarCredenciales(){

    /*
    // existe username y password 
    if (!username || !password){
        return false;
    }
    //password tiene mas de 3 de longitud
    if (password.length < 8 && password.includes(Number, String) && password.trim()){
        return false;
    }
    if (!localStorage.getItem(username) || !localStorage.getItem(password)){
        return false;
        // existe user y password en localStorage
        }
        */
       // nota: siempre, siempre, siempre trimear la data de los formularios. 


    if (!username.trim() || !password.trim() || password.length < 3 ){
        return false;
    }
    const users = getUsers();
    const user = users.find((user)=>{
        user.username === username  
    })

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const ok= bcrypt.compareSync(username.passwordhash, hash);

    return ok; 

    


}