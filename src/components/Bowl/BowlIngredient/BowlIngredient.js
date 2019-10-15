import React, { Component } from 'react';
import classes from './BowlIngredient.css';
import PropTypes from 'prop-types';

class BowlIngredient extends Component {
    render() {
        let ingredient = null;
    
        switch (this.props.type) {
            case ('fillings'):
                ingredient = <div className={classes.Bacon}></div>;           
                break;
            case ('rice'):
                ingredient = (
                    <div className={classes.RiceWrapper}>
                        <div className={classes.Rice1}></div>
                        <div className={classes.Rice2}></div>
                        <div className={classes.Rice3}></div>
                    </div>);                
                break;
            case ('beans'):
                ingredient = (
                    <div className={classes.BeansWrapper}>
                        <div className={classes.Beans1}></div>
                        <div className={classes.Beans2}></div>
                        <div className={classes.Beans3}></div>
                    </div>); 
                break;
            case ('cheese'):
                ingredient = (
                    <div className={classes.CheeseWrapper}>
                        <div className={classes.Cheese1}></div>
                        <div className={classes.Cheese2}></div>
                        <div className={classes.Cheese3}></div>
                </div>);
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