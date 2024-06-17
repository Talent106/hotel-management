import { takeLatest } from 'redux-saga/effects';

import {
  GET_LOGIN_REQUEST,
  GET_USERS_REQUEST,
} from "../actions";

import {
  getLoginRequest
} from './app';

import {
  getUsersRequest
} from './users';

export default function* rootSaga() {
  yield takeLatest(GET_LOGIN_REQUEST, getLoginRequest);
  yield takeLatest(GET_USERS_REQUEST, getUsersRequest);
};