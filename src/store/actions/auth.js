import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => ({
    type: actionTypes.AUTH_START
})

export const authSuccess = authData => ({
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
})

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error: error
})

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD2RIfNXZthi2MrbR5GrxUtpnvTbsmQ5zk'
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD2RIfNXZthi2MrbR5GrxUtpnvTbsmQ5zk'
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res.data)
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err))
            })
    }
}