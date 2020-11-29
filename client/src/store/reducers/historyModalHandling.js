import {
    SET_TASK_FOR_CHANGE,
    H_SET_COST,
    H_SET_DATE,
    H_SET_MARK,
    H_SET_MODEL,
    H_SET_SIDE,
    H_SET_TITLE,
    H_SET_SUBWORK,
    H_ADD_TASK,
    H_ADD_SIDE,
    H_DELETE_SIDE,
    H_ADD_SUBWORK,
    H_DELETE_SUBWORK,
    H_DELETE_TASK,
    H_UPDATE_RESP,

} from '../actionTypes'
import { tasks } from './taskHandling';


const initState = {
    taskForChange: null,
    updatedTask: null,
}



export const historyModal = (state = initState, action) => {
    const { payload, type } = action;
    switch (type) {

        case SET_TASK_FOR_CHANGE:
            return { ...state, taskForChange: payload };

        case H_SET_TITLE:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return { ...item, title: payload.value }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_SET_COST:
            if( typeof +payload.value !== 'number' ){
                return {...state}
            }
            
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, 
                                totalCost: state.taskForChange.tasks.data.tasks.reduce((acc, item)=>{
                                    if(item.id === payload.id){
                                        return acc += +payload.value
                                    }
                                    return acc += +item.cost
                                },0),
                                tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return { ...item, cost: payload.value }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_SET_MODEL:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, model: payload
                        }
                    }
                }
            }

        case H_SET_MARK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, mark: payload
                        }
                    }
                }
            }
        case H_SET_SIDE:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return {
                                            ...item, names: item.names.map((nameItem, i) => {
                                                if (i !== payload.i) {
                                                    return { ...nameItem }
                                                }
                                                return { ...nameItem, side: payload.value }
                                            })
                                        }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_SET_SUBWORK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return {
                                            ...item, names: item.names.map((nameItem, i) => {
                                                if (i !== payload.i) {
                                                    return { ...nameItem };
                                                }
                                                if (nameItem.subWork) {
                                                    return {
                                                        ...nameItem, subWork: nameItem.subWork.map((subItem, i) => {
                                                            if (i !== payload.subI) {
                                                                return { ...subItem }
                                                            }
                                                            return { ...subItem, name: payload.value }
                                                        })
                                                    }
                                                }
                                                return { ...nameItem };
                                            })
                                        }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_ADD_TASK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks, {
                                    title: '',
                                    cost: '',
                                    id: payload.id,
                                    canBeHideTitle: false,
                                    names: [{ side: 'Новый', id: payload.newId }]
                                }
                            ]
                        }
                    }
                }
            }

        case H_ADD_SIDE:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return { ...item, names: [...item.names, { side: 'Новый', id: payload.newId }] }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_DELETE_SIDE:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        const x = item.names.filter((fItem, i) => i !== payload.i)
                                        return { ...item, names: x }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_ADD_SUBWORK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return {
                                            ...item, names: item.names.map((nameItem, i) => {
                                                if (nameItem.id !== payload.nameId) {
                                                    return { ...nameItem };
                                                }
                                                if (nameItem.subWork) {
                                                    return { ...nameItem, subWork: [...nameItem.subWork, {name:'', id: payload.newId}] }
                                                } else {
                                                    return { ...nameItem, subWork: [{name:'', id: payload.newId}] }
                                                }
                                            })
                                        }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_DELETE_SUBWORK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks: {
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, tasks: [
                                ...state.taskForChange.tasks.data.tasks.map(item => {
                                    if (item.id === payload.id) {
                                        return {
                                            ...item, names: item.names.map((nameItem, i) => {
                                                if (nameItem.id !== payload.nameId) {
                                                    return { ...nameItem };
                                                }
                                                if (nameItem.subWork) {

                                                    if(nameItem.subWork.length === 1){
                                                        delete nameItem.subWork
                                                        return {...nameItem}
                                                    }
                                                    return {
                                                        ...nameItem, subWork: nameItem.subWork.filter((swItem, i) => {
                                                            return i !== payload.i
                                                        })
                                                    }
                                                }
                                            })
                                        }
                                    }
                                    return { ...item };
                                })
                            ]
                        }
                    }
                }
            }

        case H_DELETE_TASK:
            return {
                ...state,
                taskForChange: {
                    ...state.taskForChange, tasks:{
                        ...state.taskForChange.tasks, data: {
                            ...state.taskForChange.tasks.data, 
                            tasks: state.taskForChange.tasks.data.tasks.filter(tItem=>tItem.id !== payload.id)
                        }
                    }
                }
            }

        case H_UPDATE_RESP:
            return {...state, updatedTask: payload}


       
        default:
            return { ...state }
    }
}

