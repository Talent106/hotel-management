import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../actions";

export function* getUsersRequest(action) {
   try {
      yield put(GET_USERS_SUCCESS, action);
   } catch (e) {
      yield put(GET_USERS_FAILURE, e.message);
   }
}