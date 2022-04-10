import React from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { TodosActionsTypes } from "./types/todos";

const TodosList = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const dispatch = useDispatch()
    const pages = [1, 2, 3 ,4 ,5]

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <button onClick={() => dispatch({type: TodosActionsTypes.FETCH_TODOS})}>Получить список дел</button>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.id}-{todo.title}</div>
            ))}
            <div style={{display: 'flex'}}>
                {pages.map((page) => (
                    <div
                        style={{border: page === page ? '2px solid green' : '1px solid gray', padding: 10}}>
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodosList;
