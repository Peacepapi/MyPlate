import React from 'react';
import NavigationItems from '../NavigationItems/NavaigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = props.open ? [classes.SideDrawer, classes.Open]:[classes.SideDrawer, classes.Close]
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;