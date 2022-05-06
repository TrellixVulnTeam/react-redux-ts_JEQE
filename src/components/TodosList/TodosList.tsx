import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchTodos, setTodoPage } from "../../store/sagas/todos";
import { TodosActionsTypes } from "../../store/types/todos";
import styles from './todosList.module.scss';

const TodosList = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const  [activePages, setActivePages] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos(page, limit).then((response) => dispatch({type: TodosActionsTypes.FETCH_TODOS_SUCCESS, payload: response}))
    }, [page])

    const handleClick = (item:number) => {
        dispatch(setTodoPage(item))
        setActivePages(true)
    }

    const pages = [1, 2, 3 ,4 ,5];

    return (
        <div className={styles.wrapper}>
            {todos.map((todo) => (
                <div className={styles.todoList} key={todo.id}>{todo.id} Комментарий -{todo.title}</div>
            ))}
            <div style={{display: 'flex'}}>
                {pages.map((item) => (
                    <div key={item.toString()}
                        onClick={() => handleClick(item)}
                        // style={{border:item === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}
                        className={activePages && item === page ? styles.active : styles.pages }
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodosList;
