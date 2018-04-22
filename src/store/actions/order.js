import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
})

export const purchaseBurgerFail = error => ({
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
})

export const purchaseBurgerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START
})

export const purchaseBurger = orderData => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData)
            .then(res => {
                console.log(res.data)
                dispatch(purchaseBurgerSuccess(res.data.name, orderData))
            })
            .catch(err => {
                dispatch(purchaseBurgerFail(err))
            });
    }
}
