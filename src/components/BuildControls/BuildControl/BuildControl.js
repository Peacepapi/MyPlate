import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>-</button>
            <p>{props.count}</p>
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
    )
}

export default buildControl;