import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavaigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;