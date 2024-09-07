import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyC3m7oHGfrb5uTv84RZuStP-RZAb9xdjWA",
    authDomain: "netflix-clone-35d7a.firebaseapp.com",
    projectId: "netflix-clone-35d7a",
    storageBucket: "netflix-clone-35d7a.appspot.com",
    messagingSenderId: "1058952146174",
    appId: "1:1058952146174:web:892d7823744dd2129d89af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
} 

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};