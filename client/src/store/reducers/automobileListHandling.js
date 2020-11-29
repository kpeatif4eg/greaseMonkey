import {
    SET_MARK_OF_AUTO_LIST,
    SET_MODEL_BY_MARK,
    START_REQUEST, 
    END_REQUEST,
    SET_CURRENT_MODEL,
    SET_CURRENT_MARK,

} from '../actionTypes'

const initState = {
    automobiles:'',
    currentMark:'',
    checkedMark:'',
    checkedModel:'',

    isFetching:false,
}

export const marks = (state = initState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_MARK_OF_AUTO_LIST:
            return {...state, automobiles: payload};
        case SET_MODEL_BY_MARK:
            return {...state, currentMark: payload};
        case START_REQUEST:
            return {...state, isFetching: true}
        case END_REQUEST:
            return {...state, isFetching: false}
        case SET_CURRENT_MODEL:
            return {...state, checkedMark: payload}
        case SET_CURRENT_MARK:
            return {...state, checkedModel: payload}
        default:
            return {...state}
    }
}