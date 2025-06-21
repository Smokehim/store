 import React, { createContext, useReducer, ReactNode } from "react";

interface Action {
  type: string;
  items?: any;
}

interface ReduceContextType {
  state: any[];
  dispach: React.Dispatch<Action>;
}

export const ReduceContext = createContext<ReduceContextType | undefined>(undefined);

function Logic({ state, action }: { state: any[]; action: Action }): any[] {
  switch (action.type) {
    case 'Add':
      return [...state, action.items];
    case 'Subtract':
      return state.slice(0, -1); // remove last item as an example
    case 'Reset':
      return [];
    default:
      return state;
  }
}

export function Reduce({ children }: { children: ReactNode }) {
  const [state, dispach] = useReducer(Logic, []);

  return (
    <ReduceContext.Provider value={{ state, dispach }}>
      {children}
    </ReduceContext.Provider>
  );
}
