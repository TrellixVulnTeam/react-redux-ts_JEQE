import React, { FC } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { UserActionTypes } from "./types/user";

const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);


    const dispatch = useDispatch()

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <button type="button" onClick={() => dispatch({type: UserActionTypes.FETCH_USERS})}>Получить пользователей</button>
            {users.map((user) => (
                <div key={user.id}>{user.id}-{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
