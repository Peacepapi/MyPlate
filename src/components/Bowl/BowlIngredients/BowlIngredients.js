import React from 'react';
import classes from './BowlIngredient.css';

const BowlIngredient = (props) => {
    let ingredient = null;
    
    switch (props.type) {
        case ('fillings'):
            ingredient = <div className={classes.Fillings}></div>;
            break;
        case ('rice'):
            ingredient = <div className={classes.Rice}></div>;
            break;
        case ('beans'):
            ingredient = <div className={classes.Beans}></div>;
            break;
        case ('toppings'):
            ingredient = <div className={classes.Toppings}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
}

export default BowlIngredient;