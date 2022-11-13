import firebase from "./firebase";  
import { child, getDatabase, onValue, push, ref, set, update } from "firebase/database";



export const AddData = (values) => {
   
        const db = getDatabase();
        const userId = new Date().getTime()
        set(ref(db, 'users/' + userId), {
        username: values.username,
        phoneNumber: values.phone,
            gender: values.gender,
        id:userId,
    }) 

}