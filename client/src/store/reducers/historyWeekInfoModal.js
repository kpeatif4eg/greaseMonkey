import { H_D_SET_DETAILS } from "../actionTypes";

const initState = {
    info: null,

}

export const weekInfo = (state = initState, action) => {
    const { payload, type } = action;

    switch(type) {
        case H_D_SET_DETAILS:
            return { ...state, info: payload}  
        default: 
            return { ...state };           
    }
}