import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    FAILURE
} from "../actions";
  
const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN_REQUEST:
          return {
            ...state,
            loading: true,
          }
        case GET_LOGIN_SUCCESS:
          return {
            ...state,
            loading: false,
            users: action.users
          }
        case FAILURE:
          return {
            ...state,
            loading: false,
            error: action.message,
          }
        default:
          return state
    }
}