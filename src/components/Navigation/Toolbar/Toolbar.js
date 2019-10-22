import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavaigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.DrawerToggle} onClick={props.open}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Logo</div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;