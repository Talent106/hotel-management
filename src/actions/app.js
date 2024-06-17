import {
    FAILURE,
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
} from './index';

export function getLoginRequest(id) {
    return {
        type: GET_LOGIN_REQUEST,
        payload: id
    }
}

export function getLoginSuccess() {
    return {
        type: GET_LOGIN_SUCCESS,
    }
}

export function getFailure() {
    return {
        type: FAILURE,
    }
}
