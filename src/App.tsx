import React from 'react';
import './index.scss'
import UserList from "./components/UserList";
import CommentsList from "./components/CommentsList";
import TodosList from "./components/TodosList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/header/header";

const App = () => {
    return (
        <BrowserRouter>
           <Header />
            <Routes>
                <Route path='/users' element={<UserList />}></Route>
                <Route path='/comments' element={<CommentsList />}></Route>
                <Route path='/todos' element={<TodosList />}></Route>
                <Route path='/' element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;


