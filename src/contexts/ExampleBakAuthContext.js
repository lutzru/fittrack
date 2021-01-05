import React, { useContext, useEffect, useState } from 'react'

import {firebaseAuth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({children}) {

    

    const [currentUser,setCurrentUser] = useState()

    function signup(email,password) {
        return firebaseAuth.createUserWithEmailAndPassword(email,password)
    }

    
    useEffect( () => {
        const unsubscribe = firebaseAuth.onAuthStateChange(user => {
            setCurrentUser(user)
        })

        return unsubscribe

    }, [])
    
   
   



   
    const value = {
        currentUser,
        signup
    }
    
    
    return (
       <AuthContext.Provider  > hierContextChildren: {children} </AuthContext.Provider> 
    )
    


}

export default AuthContext
