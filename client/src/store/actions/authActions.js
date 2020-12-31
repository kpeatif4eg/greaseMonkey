import {
    SHOW_MODAL_LOGOUT,
    HIDE_MODAL_LOGOUT,
    SHOW_MODAL_INFO,
    HIDE_MODAL_INFO,
} from '../actionTypes';


export const logoutModal = message => ({type: SHOW_MODAL_LOGOUT, payload: message}) 
export const logoutCloseModal = () => ({type: HIDE_MODAL_LOGOUT});

export const infoModal = (message, isOk) => ({type: SHOW_MODAL_INFO, payload: {message ,isOk}}) 
export const infoCloseModal = () => ({type: HIDE_MODAL_INFO});

