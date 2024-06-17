import { call, put, takeEvery } from 'redux-saga/effects';
import {
    GET_LOGIN_SUCCESS,
    FAILURE
} from "../actions";

export function* getLoginRequest(action) {
   try {
      yield put(GET_LOGIN_SUCCESS, action);
   } catch (e) {
      yield put(FAILURE, e.message);
   }
}