import { Children, createContext, useReducer } from "react"

export const ReduceContext = createContext()
export function Reduce({children}){
    function Logic({state, action}:{action: {type: any}, state: []}){
        switch(action.type){
            case 'Add':
                return [...state, action.items]
            case 'Subtract':
                return
            case 'Reset':
                return
            default:
                return 
        }
    }
    const [state, dispach] = useReducer(Logic, [])
    return(
        <ReduceContext.Provider value={{state, dispach}}>
            {Children}
        </ReduceContext.Provider>
    )
}