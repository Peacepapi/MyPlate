import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(inKey => {
        return <li key={inKey}><span style={{textTransform: 'capitalize'}}>{inKey}</span>: {props.ingredients[inKey]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A banging bowl with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p>Subtotal: {props.totalPrice.toFixed(2)}</p>
            <Button btnType="Danger" clicked={props.cancelPurchase}>Cancel</Button>
            <Button btnType="Success" clicked={props.continuePurchase}>Continue</Button>
        </Aux>
    )
}

export default orderSummary;