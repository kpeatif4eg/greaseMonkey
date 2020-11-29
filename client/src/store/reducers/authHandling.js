import {
    SET_TOKEN,
    START_REQUEST,
    END_REQUEST,
    ERROR_REQUEST,
    REGISTRATION_SUCCESSFULL,
    REGISTRATION_FAILURE,
    SAVE_LOCAL_STORAGE,
    DELETE_TOKEN,
    SHOW_MODAL_LOGOUT,
    HIDE_MODAL_LOGOUT
} from '../actionTypes'

import {localStorageToken,localStorageUserId} from '../../configs/config';

const initState = {
    token: null,
    userId: null,
    isFetching: false,
    error: null,
    message: '',
    isModal:false,
    modalMsg: ''
}


export const auth = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case SET_TOKEN:
            if( payload.token ) {
                localStorage.setItem(localStorageToken, payload.token);
                localStorage.setItem(localStorageUserId, payload.userId);
            }
            return { ...state, token: payload.token, userId: payload.userId, message: 'Вы успешно вошли' };


        case START_REQUEST:
            return { ...state, isFetching: true };

        case END_REQUEST:
            return { ...state, isFetching: false };

        case ERROR_REQUEST:
            return { ...state, error: true, message: 'Что-то пошло не так' };

        case REGISTRATION_SUCCESSFULL:
            return { ...state, message: 'Регистрация успешна' };

        case REGISTRATION_FAILURE:
            return { ...state, message: 'Регистрация не удалась' };

        case SAVE_LOCAL_STORAGE:
            if( localStorage.getItem(localStorageToken) ){
                return { ...state,  token: localStorage.getItem(localStorageToken)}
            }
            return{...state}
        case DELETE_TOKEN:
            localStorage.removeItem(localStorageToken)
            window.location.reload(null);
            return {...state, token: null};

        case SHOW_MODAL_LOGOUT:
            return {...state, isModal: true, modalMsg: payload};
        case HIDE_MODAL_LOGOUT: 
            return {...state, isModal: false}

        default:
            return { ...state }
    }
}