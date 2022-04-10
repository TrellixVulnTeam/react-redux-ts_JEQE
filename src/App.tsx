import React from 'react';
import './index.scss'
import UserList from "./components/UserList";
import CommentsList from "./components/CommentsList";
import TodosList from "./components/TodosList";

const App = () => {
    return (
        <div>
            <UserList />
            <CommentsList />
            <TodosList />
        </div>
    );
};

export default App;


