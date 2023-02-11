import { Reducer, createContext, useReducer } from "react";

export const AppContext = createContext({})
const initialState= {
  user: null,
};

const appReducer = (
  state: any,
  action: { type: string; payload?: any}
) => {
  switch (action.type) {
    case "SET_USER":
        const user = action.payload
        return {
          ...state,
          user
        }
    default:
      return {
        ...state
      };
    
  }

};

export const AppContextProvider = ({children}:any) => {

    // const [state, dispatch] = useReducer<Reducer<Cart,{ type: string; payload?: any }>>(cartReducer, initialState);
    const [state,dispatch] = useReducer(appReducer,initialState)
  // Dentro del value del provider colocaremos el state y el dispatch para 
  // manejar el estado global
  return (
    <AppContext.Provider value={[state,dispatch]}>
      {children}
    </AppContext.Provider>
  );
}