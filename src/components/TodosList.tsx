import React, {useEffect} from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchTodos, setTodoPage } from "../store/sagas/todos";
import { TodosActionsTypes } from "../store/types/todos";

const TodosList = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const dispatch = useDispatch()
    console.log(todos)

    useEffect(() => {
        fetchTodos(page, limit).then((response) => dispatch({type: TodosActionsTypes.FETCH_TODOS_SUCCESS, payload: response}))
    }, [page])

    const pages = [1, 2, 3 ,4 ,5]

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.id}-{todo.title}</div>
            ))}
            <div style={{display: 'flex'}}>
                {pages.map((item) => (
                    <div
                        onClick={() => dispatch(setTodoPage(item))}
                        style={{border:item === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodosList;
