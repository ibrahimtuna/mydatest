import { call, put, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPES, login} from "./actions/userActions";

function getUserData() {
    /*
        Any other api call here
     */
}

function* handleGetUser() {
    const access_token = yield call(getUserData);
    //yield put(any_other_function(data))
}

export function* fetchAccessToken() {
    yield takeLatest(ACTION_TYPES.LOGIN, handleGetUser);
}
