import axios from 'axios';
import { startRequest, endRequest, setError } from '../actions/requestState';

import { SET_MARK_OF_AUTO_LIST, SET_MODEL_BY_MARK,SET_CURRENT_MARK, SET_CURRENT_MODEL } from '../actionTypes';


const setAutomobileList = autos => ({type: SET_MARK_OF_AUTO_LIST, payload: autos});
const setMarkList = mark => ({type: SET_MODEL_BY_MARK, payload: mark});

export const setMark = mark => ({type: SET_CURRENT_MARK, payload:mark})
export const setModel = model => ({type: SET_CURRENT_MODEL, payload:model})

export const settingAutomobileList = () => {
    return dispatch => {
        axios.get('/auto/autoMarks')
        .then(resp=>{
            dispatch( startRequest() )
            dispatch( setAutomobileList(resp.data.message) )  
            dispatch( endRequest() )
        })
    }
}

export const settingMark = model => {
    return dispatch => {
        dispatch( startRequest() )
        axios.post('/auto/autoModels',{
            mark: model
        })
        .then(resp=>{
            dispatch( setMarkList(resp.data.message) );
            dispatch( endRequest() )
        })
        .catch(err=>{
            dispatch( setMarkList('Ошибка') );
        })
    }
}
