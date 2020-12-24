import {
    SET_TOKEN,
    REGISTRATION_SUCCESSFULL,
    REGISTRATION_FAILURE,
    DELETE_TOKEN,

} from '../../actionTypes';

import {httpRequest} from '../../../utils/API'

import { startRequest, endRequest, setError } from '../requestState';

import { saveToLocalStorage } from '../localStorageActions'

const setToken = (tokenAnduserId) => ({ type: SET_TOKEN, payload: tokenAnduserId });

const registrationSuccessfull = () => ({ type: REGISTRATION_SUCCESSFULL });
const registrationFailure = () => ({ type: REGISTRATION_FAILURE });

export const login = (formData) => {
    return dispatch => {
        dispatch(startRequest());

        httpRequest.post('/auth/login', {
            email: formData.email,
            password: formData.password,

        })
            .then(res => {
                dispatch(setToken(res.data));
                dispatch(saveToLocalStorage(res.data.token))
                dispatch(endRequest());
            })
            .catch(err => {
                dispatch(setError());
                dispatch(endRequest());
            })
    }
};

export const registration = formData => {
    return dispatch => {
        dispatch(startRequest());

        httpRequest.post('/auth/register', {
            ...formData
        })
            .then(res => {
                dispatch(registrationSuccessfull());
                dispatch(endRequest());

            })
            .catch(error => {
                dispatch(registrationFailure())
                dispatch(endRequest());

            })
    }
}

const deleteToken = () => ({ type: DELETE_TOKEN })

export const logout = () => {
    return dispatch => {
        dispatch(deleteToken())
    }
}

export const sendEmail = (email) => {
    return dispatch=>{
        httpRequest.post('/auth/forgetPass',{email})
        .then(res => console.log(res.data))
        .catch(e=>{
            console.log(e)
        })

    }
}