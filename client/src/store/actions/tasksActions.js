import { 
    SET_INIT_TASKLIST,
    SET_TASK_OPTIONS,
    SET_FINAL_TASK,
    SEND_FINAL_TASKS,
    GET_DONE_TASKS,
    SET_TASK_FOR_CHANGE,
    H_SET_FETCHING
} from '../actionTypes';


import {
    createTaskAPI,
    getTasksAPI,
    getInitTasksAPI,
    getTaskByIdAPI
} from '../../utils/API'

import {endRequest, startRequest, setError} from './requestState'

const setTaskList = tasks => ({type:SET_INIT_TASKLIST, payload: tasks});

const setDoneTasks = doneTasks => ({type: GET_DONE_TASKS, payload: doneTasks});

export const setTaskForChange = taskForChange => ({type: SET_TASK_FOR_CHANGE, payload: taskForChange})


export const setTaskOptions = options => ({type: SET_TASK_OPTIONS, payload: options})

const historyFetching = isFetch => ({type: H_SET_FETCHING, payload: isFetch})

export const settingTaskList = () => {
    return dispatch => {

        dispatch( startRequest() );
        
        getInitTasksAPI()
        .then( res=>{
            dispatch( setTaskList(res.data) );
            dispatch( endRequest() );
        })
        .catch(err=>{
            dispatch( setError() )
            dispatch( endRequest() );
        });
    }
}

export const setChoosedTasks = tasks => ({type:SET_FINAL_TASK, payload: tasks});


export const sendingChoosedTasks = (tasks) => {
    return dispatch => {
        createTaskAPI(tasks)
        .then((res=>{
            console.log(res)
        }))

    }
}

export const getTasks = (param) => {
    return dispatch => {
        dispatch(historyFetching(true))
        getTasksAPI(param)
        .then((res=>{
            dispatch(setDoneTasks(res.data))
            dispatch(historyFetching(false))

        }))
        .catch(e=>dispatch(historyFetching(false)))
        .finally(()=>dispatch(historyFetching(false)))
    }
}




export const getTaskById = id => {
    return dispatch => {
        getTaskByIdAPI(id)
        .then(res => dispatch(setTaskForChange(res.data)))
    }
}

