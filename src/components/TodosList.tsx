import React, {useEffect} from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { TodosActionsTypes } from "./types/todos";
import { fetchTodos, setTodoPage } from "./store/sagas/todos";

const TodosList = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const dispatch = useDispatch()

    useEffect(() => {
        fetchTodos(page, limit).then()
    }, [page])

    const pages = [1, 2, 3 ,4 ,5]

    return (
        <div>
            {/*<button onClick={() => dispatch({type: TodosActionsTypes.FETCH_TODOS})}>Получить список дел</button>*/}
            {todos.map((todo) => (
                <div key={todo.id}>{todo.id}-{todo.title}</div>
            ))}
            <div style={{display: 'flex'}}>
                {pages.map((p) => (
                    <div
                        onClick={() => dispatch(setTodoPage(p))}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}>
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodosList;
