import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthentrication =()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentrication;