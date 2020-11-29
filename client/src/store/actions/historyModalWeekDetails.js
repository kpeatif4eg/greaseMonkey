import {H_D_SET_DETAILS} from '../actionTypes';
import {getWorkDaysPerRange} from '../../utils/API'

export const setHistoryDatails = (detail) => ({type:H_D_SET_DETAILS, payload: detail});


export const settingHistoryDetails = (dayRange) => {
    return dispatch =>{
        getWorkDaysPerRange(dayRange)
        .then(res => res.data.info && dispatch(setHistoryDatails(res.data)));
    }
}