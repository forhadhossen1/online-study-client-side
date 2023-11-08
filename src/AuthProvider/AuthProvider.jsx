
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';




export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const provider = new GoogleAuthProvider();

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            console.log('current user', currentUser)

            setUser(currentUser)
            setLoading(false)
            //if user exists then issue a token ... 
            if (currentUser) {
                axios.post('https://assignment11-onlinestudy-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }

            else {
                axios.post('https://assignment11-onlinestudy-server.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }

        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        user,
        loading,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;