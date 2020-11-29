import {
    // SET_TASK_FOR_CHANGE,
    GET_DONE_TASKS,
    H_SET_FETCHING,
} from '../actionTypes';



const initState = {
    isFetchingHistoryPage: false,
    doneTasks: null,
}

export const history = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_DONE_TASKS:
            return {...state, doneTasks: payload };
        case H_SET_FETCHING:
            return {...state, isFetchingHistoryPage:payload};
        default :
            return {...state}
    }
}