import { createContext } from "react";
import { IauthProviderProps } from "../interface/typeUsers";

export const AuthContext = createContext({})

const AuthProvider = ({children}: IauthProviderProps) => {
    
    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export default AuthProvider