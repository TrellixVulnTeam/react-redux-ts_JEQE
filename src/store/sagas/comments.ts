import { takeEvery, put, call } from 'redux-saga/effects';
import axios from "axios";
import { CommentsActionTypes, ICommentsState } from "../types/comments";

const fetchComments = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const data = response.data

    return data
}

function* commentsWorker() {
        const comments:Promise<ICommentsState[]> = yield call(fetchComments);

        yield put({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: comments});
}

export function* commentsWatcher(){
    yield takeEvery(CommentsActionTypes.FETCH_COMMENTS, commentsWorker);
}


