import { createContext, useReducer, ReactNode } from "react";
import  {AppReducer, AppState, AppAction } from "./AppReducer";

type GlobalProviderProps = {
    children: ReactNode
}


const initState: AppState = {
  transactions: [
    { id: 1, text: "loan", amount: -20 },
    { id: 2, text: "salary", amount: 700 },
    { id: 3, text: "food", amount: -340 },
  ],
};

// context
export const GlobalContext = createContext(initState);
//provider
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
