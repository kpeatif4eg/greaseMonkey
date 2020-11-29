import {
    SHOW_MODAL_GLOB,
    HIDE_MODAL_GLOB,
    SHOW_MODAL_INFO,
    HIDE_MODAL_INFO,
    SET_TASK_MENU_TITLE,
} from '../actionTypes'

export const hideModal = mesage => ({type: HIDE_MODAL_GLOB, payload: mesage});

export const showModal = mesage =>({type: SHOW_MODAL_GLOB, payload: mesage});

export const infoModal = message => ({type: SHOW_MODAL_INFO, payload: message}) 
export const infoCloseModal = () => ({type: HIDE_MODAL_INFO});

export const setTaskMenuTitle = title => ({type: SET_TASK_MENU_TITLE, payload: title})