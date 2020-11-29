import {
    START_REQUEST,
    END_REQUEST,
    ERROR_REQUEST,
} from '../actionTypes';

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const setError = () => ({type:ERROR_REQUEST});