import React, { Component } from 'react';
import classes from './BowlIngredient.css';
import PropTypes from 'prop-types';

class BowlIngredient extends Component {
    render() {
        let ingredient = null;
    
        switch (this.props.type) {
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
}

BowlIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BowlIngredient;