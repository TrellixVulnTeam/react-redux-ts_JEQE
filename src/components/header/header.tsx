import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
            <Link to="/users">Users</Link>
            <Link to="/comments">Comments</Link>
        </div>
    );
};

export default Header;
