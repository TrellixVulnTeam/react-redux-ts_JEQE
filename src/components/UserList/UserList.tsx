import React, { FC, useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { UserActionTypes } from "../../store/types/user";
import styles from './userList.module.scss';

const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: UserActionTypes.FETCH_USERS})
    }, [])

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className={styles.wrapper}>
            <h2>Пользователи</h2>
            {users.map((user) => (
                <div className={styles.usersList} key={user.id}>{user.id}-{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
