import React from 'react';
import classes from './Bowl.css';
import BowlIngredient from './BowlIngredient/BowlIngredient';

const bowl = (props) => {
    // transform object of ingredients to array of ingredients
    // reduce concat the array of arrays of objects into just one array
    let transformIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
            return <BowlIngredient key={igKey + '_' + i} type={igKey} />
        });
    })
    .reduce((prev, cur) => {
        return prev.concat(cur);
    }, []);

    if(transformIngredient.length === 0)
        transformIngredient = <p>Please add some ingredients into your bowl</p>

    return (
        <div className={classes.Bowl}>
            {transformIngredient}
        </div>
    )
}

export default bowl;