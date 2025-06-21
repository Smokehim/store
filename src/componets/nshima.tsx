import { createContext } from "react";
import { Nshima } from "./images";



export const NshimaContext = createContext('');
export function Nshima({ children }) {
    return (
        <NshimaContext.Provider value={{ Nshima }}>
            {children}
        </NshimaContext.Provider>
    );
}