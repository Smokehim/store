import {Cookies} from './images'
import { createContext, useEffect } from 'react'


export const CookieContext = createContext([])

export function Cookie({children}) {
    const [Cookie, setCookies] = useState([])
    useEffect(()=>{
        setCookies(Cookies)
    },[Cookies])
    return(
        <CookieContext.Provider value={{Cookie}}>
            {children}
        </CookieContext.Provider>
    )
}