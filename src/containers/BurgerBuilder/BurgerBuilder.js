import React, { Component } from 'react';

import Aux from '../../hoComps/auxx';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.9
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCnt = this.state.ingredients[type];
        const newCnt = oldCnt + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCnt;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = (type) => {

    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;