import { createContext, useEffect, useState } from "react";
import { Chips } from "./images";


export const chipContext = createContext([])


export function Chip({children} ) {
    const [Chip, setChips] = useState([])

    useEffect(()=>{
        setChips(Chips)
    },[Chips])
    return(
        <chipContext.Provider value={{Chip}}>
            {children}
        </chipContext.Provider>
    )
}