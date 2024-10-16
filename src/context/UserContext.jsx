import { createContext, useState } from "react";

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) =>{
    const [ ligthMode, setLigthMode ] = useState(false);

    const sharedContext = {
        ligthMode,
        setLigthMode
    };
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}