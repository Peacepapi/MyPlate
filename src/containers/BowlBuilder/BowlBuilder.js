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
const BASE_PRICE = 4;

class BowlBuilder extends Component {
    state = {
        ingredients: {
            fillings: 0,
            rice: 0,
            beans: 0,
            cheese: 0
        },
        totalPrices: BASE_PRICE,
        purchasable: false
    }

    updatePurchaseState(updatedIngredients) {
        const totalItems = Object.keys(updatedIngredients)
            .map(inKey => {
                return updatedIngredients[inKey];
            })
            .reduce((total, ele) =>  {
                return total + ele
            }, 0);
        this.setState({purchasable: totalItems > 0})
    }

    updateState(priceChange, updatedIngredients) {
        const oldPrice = this.state.totalPrices;
        const newPrice = oldPrice + priceChange;
        this.setState({totalPrices: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        this.updateState(priceAddition, updatedIngredients);
    }

    deleteIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients
};
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = -INGREDIENT_PRICES[type];
        this.updateState(priceSubtraction, updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Bowl ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.deleteIngredientHandler}
                    ingredients={this.state.ingredients}
                    disabled={disabledInfo}
                    price={this.state.totalPrices}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BowlBuilder;

