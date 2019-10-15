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
        />
    })

    return (
        <div className={classes.BuildControls}>
            {buildControlsIngredients}
        </div>
    )
}

export default buildControls;