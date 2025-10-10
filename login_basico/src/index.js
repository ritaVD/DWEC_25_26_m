//importaria el css 
import bcrypt from "bcryptjs"
import { initialApp } from "./app"; 



//initialApp();
// hash 
 const salt = bcrypt.genSaltSync(10);
 console.log(bcrypt.hashSync("1234", salt))