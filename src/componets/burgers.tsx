import { Burgers } from "./images";

import { createContext, useEffect } from "react";


export const BurgerContext = createContext();


export function Burger({ children }) {
    const [Burger, setBurger] = useState([])
    useEffect(()=>{
        setBurger(Burgers)
    },[Burgers])
    return (
        <BurgerContext.Provider value={{ Burger }}>
            {children}
        </BurgerContext.Provider>
    );
}