import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
  } from "../actions";
  
const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
      case GET_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case GET_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users
        }
      case GET_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
  }
}