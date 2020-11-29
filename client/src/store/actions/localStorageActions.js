import {SAVE_LOCAL_STORAGE} from '../actionTypes'

export const saveToLocalStorage = tokenAndUserId => ({type: SAVE_LOCAL_STORAGE, payload:{tokenAndUserId}});