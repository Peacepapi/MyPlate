import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Bowl from '../../components/Bowl/Bowl';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    fillings: 2,
    rice: 1,
    beans: 1,
    cheese: 0.5
}

class BowlBuilder extends Component {
    state = {
        ingredients: {
            fillings: 0,
            rice: 0,
            beans: 2,
            cheese: 2
        },
        totalPrices: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldprice = this.state.totalPrices;
        const newPrice = oldprice + priceAddition;
        this.setState({totalPrices: newPrice, ingredients: updatedIngredients});
    }

    render() {
        return (
            <Aux>
                <Bowl ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredients={this.state.ingredients}
                />
            </Aux>
        );
    }
}

export default BowlBuilder;

