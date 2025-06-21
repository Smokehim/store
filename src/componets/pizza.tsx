import { createContext, useEffect, useState } from 'react';
import { Pizza } from './images';

export const PizzaContext = createContext([])


export function Pizzas(){
    
    const [Pizzas, setPizza] = useState([])
    useEffect(()=>{
        setPizza(Pizza)
    },[])
    
    return(
        <PizzaContext.Provider value={{ Pizzas }}>
            <div>Image Component</div>
        </PizzaContext.Provider>
    )
}