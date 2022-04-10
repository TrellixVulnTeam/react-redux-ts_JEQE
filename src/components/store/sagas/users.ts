import { takeEvery, put, call } from 'redux-saga/effects';
import { IUserState, UserActionTypes } from "../../types/user";
import axios from "axios";

const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    const data = response.data

    return data;
}

function* usersWorker() {
        const users:Promise<IUserState[]> = yield call(fetchUsers);

        yield put({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users});
}

export function* usersWatcher(){
    yield takeEvery(UserActionTypes.FETCH_USERS, usersWorker);
}


