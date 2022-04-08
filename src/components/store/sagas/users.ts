import { takeEvery, put, call } from 'redux-saga/effects';
import { IUserState, UserActionTypes } from "../../types/user";
import axios from "axios";
import {FC} from "react";

interface PropsFetch {
    pattern: string;
}

export const fetchUsers: FC <PropsFetch> = async (pattern) => {
    const response = await axios.get<IUserState[]>(`https://jsonplaceholder.typicode.com/${pattern}`);

    const data = response.data

    return data
}

function* usersWorker() {
    const users:Promise<IUserState[]> = yield call(fetchUsers, 'users')
    const comments:Promise = yield call(fetchUsers, 'comments')

    yield put({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users})

}

export function* usersWatcher(){
    yield takeEvery(UserActionTypes.FETCH_USERS, usersWorker)
}


