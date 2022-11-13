import { REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./actions";

const reducer = (state,action) => {

  if(action.type === REGISTER_USER_BEGIN) {
    return{...state}
  }

  if(action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user:action.payload.user,
      token:action.payload.token
    }
  }

  if(action.type === REGISTER_USER_ERROR) {
    return{...state}
  }

  throw new Error(`no such action ${action.type}`)
}

export default reducer;