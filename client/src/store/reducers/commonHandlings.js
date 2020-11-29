import {
    SHOW_MODAL_GLOB,
    HIDE_MODAL_GLOB,
    SHOW_MODAL_INFO,
    HIDE_MODAL_INFO,
    SET_TASK_MENU_TITLE,

} from '../actionTypes'

const initState  = {
    isShowModalGlob: false,
    message: 'Пустые поля',
    description: 'Надо выбрать работы',
    
    infoMessage: null,
    infoShow: false,

    taskMenuTitle: '',

}

export const global = (state = initState, action) => {
    const {type, payload} = action;

    switch(type){
        case SHOW_MODAL_GLOB:
            return {...state, isShowModalGlob: true};

        case HIDE_MODAL_GLOB:
            return {...state, isShowModalGlob: false};

        case SHOW_MODAL_INFO:
            return {...state, infoMessage: payload, infoShow: true,}

        case HIDE_MODAL_INFO:
            return {...state, infoMessage: null, infoShow: false}
        case SET_TASK_MENU_TITLE:
            return {...state, taskMenuTitle: payload}
        default :
            return {...state}
    }
}