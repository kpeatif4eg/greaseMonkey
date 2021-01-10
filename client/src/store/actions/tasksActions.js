import {

    SET_TASK_OPTIONS,
    SET_TASK_FOR_CHANGE,
    SET_FINAL_TASK,
    SET_CUSTOM_WORK_TITLE,
    SET_CUSTOM_WORK_TASKITEM,
    SET_CUSTOM_WORK_COST,
    ADD_CUSTOM_WORK_TASK,
    ADD_CUSTOM_WORK_TASKITEM,
    REMOVE_CUSTOM_WORK_TASK,
    REMOVE_CUSTOM_WORK_TASKITEM

} from '../actionTypes';

export const setChoosedTasks = tasks => ({ type: SET_FINAL_TASK, payload: tasks });

export const setTaskForChange = taskForChange => ({ type: SET_TASK_FOR_CHANGE, payload: taskForChange });

export const setTaskOptions = options => ({ type: SET_TASK_OPTIONS, payload: options });

export const setCustomTitle = title => ({type: SET_CUSTOM_WORK_TITLE, payload:title });
export const setCustomTask = task => ({type: SET_CUSTOM_WORK_TASKITEM, payload:task });
export const setCustomCost = cost => ({type: SET_CUSTOM_WORK_COST, payload:cost });
export const addCustomTask = (id) => ({type: ADD_CUSTOM_WORK_TASK, payload:id });
export const addCustomTaskItem = (id) => ({type: ADD_CUSTOM_WORK_TASKITEM, payload:id });
export const removeCustomTask = (id) => ({type: REMOVE_CUSTOM_WORK_TASK, payload:id });
export const removeCustomTaskItem = (id) => ({type: REMOVE_CUSTOM_WORK_TASKITEM, payload:id });
//     SET_CUSTOM_WORK_TITLE
// SET_CUSTOM_WORK_TASKITEM
// SET_CUSTOM_WORK_COST);
