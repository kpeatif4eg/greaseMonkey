// import {
//     SET_INIT_TASKLIST,
//     GET_DONE_TASKS,
//     H_SET_FETCHING
// } from '../../actionTypes';


// import {
//     createTaskAPI,
//     getTasksAPI,
//     getInitTasksAPI,
//     getTaskByIdAPI
// } from '../../../utils/API';

// import { recurseRequest } from '../../../utils/repeatRequest';

// import { setTaskForChange } from '../tasksActions';

// import { endRequest, startRequest, setError } from '../requestState'

// const setTaskList = tasks => ({ type: SET_INIT_TASKLIST, payload: tasks });

// const setDoneTasks = doneTasks => ({ type: GET_DONE_TASKS, payload: doneTasks });

// const historyFetching = isFetch => ({ type: H_SET_FETCHING, payload: isFetch })

// export const settingTaskList = () => {
//     return dispatch => {

//         recurseRequest(
//             {
//                 dispFunc: dispatch,
//                 apiReq: getInitTasksAPI,
//                 action: setTaskList,
//                 errReq: setError,
//                 startReq: startRequest,
//                 endReq: endRequest
//             }
//         )
//     }
// }



// export const sendingChoosedTasks = (tasks) => {
//     return dispatch => {
//         createTaskAPI(tasks)
//             .then((res => {
//                 console.log(res)
//             }))

//     }
// }

// export const getTasks = (param) => {
//     return dispatch => {
//         dispatch(historyFetching(true))
//         getTasksAPI(param)
//             .then((res => {
//                 dispatch(setDoneTasks(res.data))
//                 dispatch(historyFetching(false))

//             }))
//             .catch(e => dispatch(historyFetching(false)))
//             .finally(() => dispatch(historyFetching(false)))
//     }
// }




// export const getTaskById = id => {
//     return dispatch => {
//         getTaskByIdAPI(id)
//             .then(res => dispatch(setTaskForChange(res.data)))
//     }
// }




//////////////

import { 
    SET_INIT_TASKLIST,
    SET_TASK_OPTIONS,
    SET_FINAL_TASK,
    SEND_FINAL_TASKS,
    GET_DONE_TASKS,
    SET_TASK_FOR_CHANGE,
    H_SET_FETCHING
} from '../../actionTypes';


import {
    createTaskAPI,
    getTasksAPI,
    getInitTasksAPI,
    getTaskByIdAPI
} from '../../../utils/API';

import {setTaskForChange} from '../tasksActions';

import {endRequest, startRequest, setError} from '../requestState'

const setTaskList = tasks => ({type:SET_INIT_TASKLIST, payload: tasks});

const setDoneTasks = doneTasks => ({type: GET_DONE_TASKS, payload: doneTasks});



// export const setTaskOptions = options => ({type: SET_TASK_OPTIONS, payload: options})

const historyFetching = isFetch => ({type: H_SET_FETCHING, payload: isFetch})

export const settingTaskList = () => {
    return dispatch => {

        dispatch( startRequest() );
        const maxCount = 10;
        const timeOut = 500;
        //повторный запрос при статусе ответа 500
        const recurseRequest = (reqCount = 0) => {

            getInitTasksAPI()
            .then( res=>{

                dispatch( setTaskList(res.data) );
                dispatch( endRequest() );
            })
            .catch(err=>{
                console.log(err)
                if(reqCount <= maxCount){
                    setTimeout(() => {
                        recurseRequest(reqCount+=1)
                    }, timeOut);
                } else {
                    dispatch( setError() )
                    dispatch( endRequest() );

                }
                
            });
        }
        recurseRequest()
        
    }
}

export const setChoosedTasks = tasks => ({type:SET_FINAL_TASK, payload: tasks});


export const sendingChoosedTasks = (tasks) => {
    return () => {
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

