import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    const googleSignIn = () => {
        console.log('google Sign In Clicked')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
    }
    return {
        user,
        handleSignOut,
        googleSignIn
    }
}
export default useFirebase;