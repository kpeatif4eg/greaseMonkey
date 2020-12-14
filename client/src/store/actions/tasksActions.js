import { 

    SET_TASK_OPTIONS,
    SET_TASK_FOR_CHANGE,
    SET_FINAL_TASK

} from '../actionTypes';

export const setChoosedTasks = tasks => ({ type: SET_FINAL_TASK, payload: tasks });

export const setTaskForChange = taskForChange => ({type: SET_TASK_FOR_CHANGE, payload: taskForChange})

export const setTaskOptions = options => ({type: SET_TASK_OPTIONS, payload: options})
