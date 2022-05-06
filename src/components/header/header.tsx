import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link className={styles.itemLink} to="/">Home</Link>
            <Link className={styles.itemLink} to="/todos">Todos</Link>
            <Link className={styles.itemLink} to="/users">Users</Link>
            <Link className={styles.itemLink} to="/comments">Comments</Link>
        </div>
    );
};

export default Header;
