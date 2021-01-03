import { 
    H_SET_COST,
    H_SET_DATE,
    H_SET_MARK,
    H_SET_MODEL,
    H_SET_SIDE,
    H_SET_TITLE,
    H_SET_SUBWORK,
    H_ADD_TASK,
    H_ADD_SUBWORK,
    H_ADD_SIDE,
    H_DELETE_SUBWORK,
    H_DELETE_TASK,
    H_DELETE_SIDE,
    H_UPDATE_RESP,
    H_DELETE_ORDER
} from '../actionTypes';

   
    import { updateTaskAPI, deleteTaskAPI, } from '../../utils/API';


export const setHistSubWork = subWork => ({ type: H_SET_SUBWORK, payload: subWork })

export const setHistSide = side => ({type: H_SET_SIDE, payload: side});

export const setHistDate = date => ({ type: H_SET_DATE, payload: date });

export const setHistMark = mark => ({ type: H_SET_MARK, payload: mark });

export const setHistTitle = title => ({ type: H_SET_TITLE, payload: title });

export const setHistModel = model => ({ type: H_SET_MODEL, payload: model });

export const setHistCOst = cost => ({ type: H_SET_COST, payload: cost });

export const setHistTask = id => ({ type: H_ADD_TASK, payload: id });

export const addHistSubWork = subW => ({type: H_ADD_SUBWORK, payload: subW });

export const delHistSubwork = id => ({type: H_DELETE_SUBWORK, payload: id});

export const delHistTask = id => ({type: H_DELETE_TASK, payload: id});

export const addHistSide = id => ({type: H_ADD_SIDE, payload: id});

export const delHistSide = id => ({type: H_DELETE_SIDE, payload:id});

const setUpdateResp = res => ({type:H_UPDATE_RESP, payload: res});



export const updateTask = task => {
    return dispatch => {
        debugger
        updateTaskAPI(task)
        .then(res => dispatch(setUpdateResp(res.data)))
    }
}


export const deleteTask = (id) => {
    return dispatch => {
        deleteTaskAPI(id)
        .then((res, rej)=>{
            dispatch(setUpdateResp(res.data))
        })
    }
}