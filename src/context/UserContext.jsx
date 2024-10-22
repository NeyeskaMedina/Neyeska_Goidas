import { createContext, useEffect, useState } from "react";
import { getLikes } from "../apiBack/getBackend.js";

export const UserContext = createContext({})

export const ContextProvider = ( {children} ) =>{
    const [ ligthMode, setLigthMode ] = useState(false);
    const [ send, setSend ] = useState(false);
    const [like, setLike] = useState(null)

    useEffect(() =>{
        const getLikesBack = async () =>{
            const res = await getLikes()          
            const resul = res.response.cantLike[0].count; 
            
            if(res.loading){
                setLike(parseInt(resul));
                
                
            }else{
                console.log('no likes')
            }
        }
          getLikesBack()  
    }, [])

    const sharedContext = {
        ligthMode,
        send,
        like,
        setLike,
        setSend,
        setLigthMode
    };
    return (
        <UserContext.Provider value={sharedContext}>
            {children}
        </UserContext.Provider>
    )
}