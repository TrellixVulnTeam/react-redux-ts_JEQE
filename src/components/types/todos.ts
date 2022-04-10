export interface ITodos{
    id: number;
    title: string;
}

export interface TodosState {
    todos: ITodos[];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

export enum TodosActionsTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoAction {
    type: TodosActionsTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodosActionsTypes.FETCH_TODOS_SUCCESS;
    payload: ITodos[];
}

interface FetchTodoErrorAction {
    type: TodosActionsTypes.FETCH_TODOS_ERROR;
    payload: string;
}


interface SetTodoPage {
    type: TodosActionsTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetTodoPage



