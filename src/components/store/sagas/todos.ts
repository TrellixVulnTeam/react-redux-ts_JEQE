import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";
import {ITodos, TodoAction, TodosActionsTypes} from "../../types/todos";

const fetchTodos = async (page = 1, limit = 10) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
    });

    const data = response.data

    return data;
}

export function setTodoPage (page: number):TodoAction {
 return {type: TodosActionsTypes.SET_TODO_PAGE, payload: page}
}

function* todosWorker() {
    const todos:Promise<ITodos[]> = yield call(fetchTodos);

    yield put({type: TodosActionsTypes.FETCH_TODOS_SUCCESS, payload: todos});
}

export function* todosWatcher(){
    yield takeEvery(TodosActionsTypes.FETCH_TODOS, todosWorker);
}
