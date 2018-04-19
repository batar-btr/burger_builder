import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = name => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
})

export const removeIngredient = name => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
})

export const setIngredients = ingredients => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients
})

export const fetchIngredientFailed = () => ({
    type: actionTypes.FETCH_INGREDIENTS_FAILED
})

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://btrn-burger-builder.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            })
            .catch(error => {
                dispatch(fetchIngredientFailed())
            });
    }
}