import {TodoAction, TodosActionsTypes, TodosState} from "../../../types/todos";

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todosReducer = (state = initialState, action: TodoAction): TodosState => {
    switch (action.type) {
        case TodosActionsTypes.FETCH_TODOS:
            return { ...state, loading: false }
        case TodosActionsTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: true, todos: action.payload}
        case TodosActionsTypes.FETCH_TODOS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case TodosActionsTypes.SET_TODO_PAGE:
            return { ...state, page: action.payload}
        default:
            return state
    }
}


