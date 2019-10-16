import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Fillings', type: 'fillings'},
    { label: 'Rice', type: 'rice'},
    { label: 'Beans', type: 'beans'},
    { label: 'Cheese', type: 'cheese'},
]

const buildControls = (props) => {

    const buildControlsIngredients = controls.map(ctrl => {
        return <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            count={props.ingredients[ctrl.type]}
            added={()=> props.ingredientAdded(ctrl.type)}
            deleted={()=> props.ingredientDeleted(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        />
    })

    return (
        <div className={classes.BuildControls}>
            <p>Total: <strong>{props.price.toFixed(2)}</strong></p>
            {buildControlsIngredients}
        </div>
    )
}

export default buildControls;