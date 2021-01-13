import {
    GET_USER_INFO,
    USER_FETCHING,
    SET_UPDATED_USER_INFO,
} from '../actionTypes';

import { getUserInfo, updateUserInfo } from '../../utils/API';

const setUserInfo = info => ({ type: GET_USER_INFO, payload: info });
const userFetching = bool => ({ type: USER_FETCHING, payload: bool });

export const changeUserInfo = info => ({ type: SET_UPDATED_USER_INFO, payload: info });

export const gettingUserInfo = () => {

    return dispatch => {
        dispatch(userFetching(true));
        getUserInfo()
            .then(
                user => {
                    dispatch(setUserInfo({ ...user.data.user }))
                    userFetching(false)
                }
            )
            .finally(() => dispatch(userFetching(false)))
    }
}

export const changingUserInfo = (data) => {
    delete data.isFetching;
    return dispatch => {
        updateUserInfo(data)
    }
}