import React,{useState,useReducer,useContext} from "react";
import { REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./actions";
import reducer from "./reducers";
import axios from 'axios';

const initailState = {
  user: null,
  token: null
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initailState);

  const addUserToLocal = ({user,token}) => {
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
  }

  const removeUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const registerUser = async (currentUser) => {
    dispatch({type: REGISTER_USER_BEGIN})
    
    try{
      const response = await axios.post('/api/v1/auth/register', currentUser)
      console.log(response)

      const {user,token} = response.data

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload:{
          user,
          token
        }
      })
    } catch(error) {
      console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload:{msg: error.response.data.msg}
      })
    }
  }

  return(
    <AppContext.Provider value={{...state,registerUser}}>
      {children}
    </AppContext.Provider>
  )
};

const useAppContext = () => {
  return useContext(AppContext)
};

export {AppProvider, useAppContext, initailState};