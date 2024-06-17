import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './index';

export function getUsersRequest(id) {
  return {
    type: GET_USERS_REQUEST,
    payload: id
  }
}

export function getUsersSuccess() {
  return {
    type: GET_USERS_SUCCESS,
  }
}

export function getUsersFailure() {
  return {
    type: GET_USERS_FAILURE,
  }
}