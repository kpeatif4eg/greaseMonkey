import axios from 'axios';
import {
    SET_TOKEN,
    REGISTRATION_SUCCESSFULL,
    REGISTRATION_FAILURE,
    DELETE_TOKEN,
    SHOW_MODAL_LOGOUT,
    HIDE_MODAL_LOGOUT,
    SHOW_MODAL_INFO,
    HIDE_MODAL_INFO,
} from '../actionTypes';

import {startRequest, endRequest, setError} from './requestState';

import {saveToLocalStorage} from './localStorageActions'

const setToken = (tokenAnduserId) => ({type: SET_TOKEN, payload: tokenAnduserId});

const registrationSuccessfull = () => ({type: REGISTRATION_SUCCESSFULL});
const registrationFailure = () => ({type: REGISTRATION_FAILURE});

export const login = (formData) => {
    return dispatch => {
        dispatch( startRequest() );

        axios.post('/api/auth/login',{
            email:formData.email,
            password: formData.password,

        })
        .then(res=>{
                dispatch( setToken(res.data) );
                dispatch( saveToLocalStorage(res.data.token) )
                dispatch( endRequest() );
        })
        .catch(err=>{
                dispatch( setError() );
                dispatch( endRequest() );
        })
    }
};

export const registration = formData => {
    return dispatch => {
        dispatch( startRequest() );

        axios.post('/api/auth/register',{
            ...formData
        })
        .then(res=>{
            dispatch( registrationSuccessfull() );
            dispatch( endRequest() );

        })
        .catch(error=>{
            dispatch( registrationFailure() )
            dispatch( endRequest() );

        })
    }
}

const deleteToken = () => ({type: DELETE_TOKEN})

export const logout = () => {
    return dispatch => {
        dispatch(deleteToken())
    }
}

export const logoutModal = message => ({type: SHOW_MODAL_LOGOUT, payload: message}) 
export const logoutCloseModal = () => ({type: HIDE_MODAL_LOGOUT});

export const infoModal = message => ({type: SHOW_MODAL_INFO, payload: message}) 
export const infoCloseModal = () => ({type: HIDE_MODAL_INFO});

