import {
    USER_FETCHING,
    GET_USER_INFO,
    SET_UPDATED_USER_INFO,
} from '../actionTypes'


const initState = {
    email:'',
    paymentDay: '',
    percentLevel:'',
    workplaceName:'',
    isFetching: false,

}
export const user = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_USER_INFO:
            return {...state, 
                    email: payload.email,
                    paymentDay: payload.paymentDay,
                    percentLevel: payload.percentLevel,
                    workplaceName: payload.workplaceName,
                    paymentRange: payload.paymentRange

                }
        case USER_FETCHING:
            return {...state ,isFetching: payload};

        case SET_UPDATED_USER_INFO:
            // ????????????????????????????? приведенеи типов
            return {...state, [payload.key]: payload.value}
        default:
            return{...state, }
    }

}