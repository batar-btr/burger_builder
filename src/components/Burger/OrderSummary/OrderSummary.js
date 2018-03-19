import React from 'react';

import Aux from '../../../hoComps/auxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>
                    : {props.ingredients[ingKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A dilicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;