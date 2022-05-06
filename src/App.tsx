import React from 'react';
import './index.scss'
import UserList from "./components/UserList/UserList";
import CommentsList from "./components/Comments/CommentsList";
import TodosList from "./components/TodosList/TodosList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/header/header";
import './App.scss';

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


