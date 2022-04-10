import React from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { TodosActionsTypes } from "./types/todos";

const TodosList = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch({type: TodosActionsTypes.FETCH_TODOS})}>Получить список дел</button>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.id}-{todo.title}</div>
            ))}
        </div>
    );
};

export default TodosList;
