import React, { createContext, useEffect, useState } from 'react';
import { Drink } from './images';
export const drinkContext = createContext([])
export function Image({children}){
    
    
    const [Drinks , setDrinks ] = useState([])
    useEffect(()=>{
        setDrinks(Drink)
    },[Drink])
    
    return(
        <drinkContext.Provider value={{Drinks}}>
            {children}
        </drinkContext.Provider>
    )

}