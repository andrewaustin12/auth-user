import React,{useState,useReducer,useContext} from "react";
import reducer from "./reducers";

const initailState = {
  user: null,
  token: null
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initailState);

  return(
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  )
};

const useAppContext = () => {
  return useContext(AppContext)
};

export {AppProvider, useAppContext, initailState};