import { createContext, useState } from "react";

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) =>{
    const [ ligthMode, setLigthMode ] = useState(false);
    const [ send, setSend ] = useState(false);

    const sharedContext = {
        ligthMode,
        send,
        setSend,
        setLigthMode
    };
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}