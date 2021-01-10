
import {
    SET_INIT_TASKLIST,
    START_REQUEST,
    END_REQUEST,
    ERROR_REQUEST,
    SET_TASK_OPTIONS,
    SET_FINAL_TASK,

    SET_CUSTOM_WORK_TITLE,
    SET_CUSTOM_WORK_TASKITEM,
    SET_CUSTOM_WORK_COST,

    ADD_CUSTOM_WORK_TASK,
    ADD_CUSTOM_WORK_TASKITEM,

    REMOVE_CUSTOM_WORK_TASKITEM,
    REMOVE_CUSTOM_WORK_TASK,

    // GET_DONE_TASKS,
} from '../actionTypes'


const initState = {
    chassis: {},
    engine: {},
    transmission: {},
    electrical: {},
    maintain: {},
    attachmentEquip: {},
    diagnostic: {},
    customTask: {},
    choosedTasks: { notRecurse: true },
    error: null,
    isFetching: false,
    doneTasks: null,
}

export const tasks = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case SET_INIT_TASKLIST:
            return {
                ...state,
                chassis: payload.chassisTasksGlobal,
                engine: payload.engineTasksGlobal,
                transmission: payload.transmissionTasksGlobal,
                maintain: payload.maintainTasksGlobal,
                attachmentEquip: payload.attachmentsEquipmentGlobal,
                diagnostic: payload.diagnosticTasksGlobal,
                customTask: payload.customTaskGlobal,
                error: null,
            };

        case START_REQUEST:
            return { ...state, isFetching: true };
        case END_REQUEST:
            return { ...state, isFetching: false };
        case ERROR_REQUEST:
            return { ...state, error: 'Не удалось загрузить данные' };


        case SET_TASK_OPTIONS:
            const id = payload.id;
            const sideId = payload.sideId;
            const name = payload.name;
            const isChecked = payload.isChecked;
            const cost = payload.cost;
            const typeSystem = payload.typeOfSystem;
            const mainTypeSystem = payload.mainSystem;
            const isSubsSides = payload.isSubSides;
            const isRadio = payload.radio && payload.radio;
            const clear = payload.clear && payload.clear;
            return {

                ...state,
                [mainTypeSystem]: {
                    ...state[mainTypeSystem],

                    [typeSystem]: {
                        ...state[mainTypeSystem][typeSystem],
                        tasks: state[mainTypeSystem][typeSystem].tasks.map(item => {
                            if (item.id === id) {

                                if (cost) {
                                    return { ...item, cost }
                                }
                                if (isRadio && !clear) {
                                    return {
                                        ...item, sides: item.sides.map(radioItem => {
                                            if (radioItem.id === sideId) {
                                                return { ...radioItem, side: { ...radioItem.side, isChecked } }
                                            }
                                            return { ...radioItem, side: { ...radioItem.side, isChecked: false } }
                                        })
                                    }
                                } else if (isRadio && clear) {
                                    return {
                                        ...item, sides: item.sides.map(radioItem => {
                                            return { ...radioItem, side: { ...radioItem.side, isChecked: false } }

                                        })
                                    }
                                }
                                return {
                                    ...item, sides: item.sides.map(subItem => {
                                        if (subItem.side.name === name) {
                                            return { ...subItem, side: { ...subItem.side, isChecked } }
                                        }

                                        if (isSubsSides) {

                                            return {
                                                ...subItem,
                                                side: {
                                                    ...subItem.side,
                                                    subSides: subItem.side.subSides && subItem.side.subSides.map(subSubItem => {
                                                        if (subSubItem.name === name && subItem.id === sideId) {

                                                            return { ...subSubItem, isChecked: isChecked }
                                                        }
                                                        return { ...subSubItem }
                                                    })
                                                }
                                            }
                                        }
                                        return { ...subItem }
                                    })
                                }
                            }
                            return { ...item };
                        })
                    }
                }
            }
        case SET_FINAL_TASK:
            return { ...state, choosedTasks: { ...state.choosedTasks, ...payload } }

        case SET_CUSTOM_WORK_TITLE:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.map(item => {
                            if (payload.id !== item.id && payload.value) {
                                return { ...item }
                            }
                            return { ...item, title: payload.value }
                        })
                    }
                },
            };
        case SET_CUSTOM_WORK_TASKITEM:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.map(item => {
                            if (payload.id !== item.id && payload.value) {
                                return { ...item }
                            }
                            return {
                                ...item, sides: item.sides.map(sideItem => {
                                    if (payload.sideId !== sideItem.id) {
                                        return { ...sideItem }
                                    }
                                    return { ...sideItem, side: { ...sideItem.side, name: payload.value, isChecked: true, } }
                                })
                            }
                        })
                    }
                },
            };

        case SET_CUSTOM_WORK_COST:

            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.map(item => {
                            if (payload.id !== item.id && payload.value) {
                                return { ...item }
                            }
                            return { ...item, cost: payload.value }
                        })
                    }
                },
            };

        case ADD_CUSTOM_WORK_TASK:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: [...state.customTask.custom.tasks, {
                            title: '',
                            id: payload.id,
                            sides: [
                                {
                                    side: {
                                        name: '',
                                        value: '',
                                        isChecked: false,
                                        cost: '',
                                    },
                                    id: payload.sideId

                                }
                            ]
                        }]
                    }
                },
            };

        case ADD_CUSTOM_WORK_TASKITEM:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.map(item => {
                            if (item.id !== payload.id) {
                                return { ...item };
                            }
                            return {
                                ...item,
                                sides: [...item.sides,
                                {
                                    side: { name: '', isChecked: false, cost: '' },
                                    id: payload.sideId
                                },
                                ]
                            }
                        })
                    }
                }
            };
        case REMOVE_CUSTOM_WORK_TASK:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.filter(item => {
                            return item.id !== payload.id
                        }
                        )
                    }
                }
            };



        case REMOVE_CUSTOM_WORK_TASKITEM:
            return {
                ...state,
                customTask: {
                    ...state.customTask,
                    custom: {
                        ...state.customTask.custom,
                        tasks: state.customTask.custom.tasks.map(item => {
                            if (item.id !== payload.id) {
                                return { ...item };
                            }
                            return {
                                ...item,
                                sides: item.sides.filter(sideItem => {
                                    return sideItem.id !== payload.sideId
                                })
                            }
                        })
                    }
                }
            };

        default:
            return { ...state };
    }
}
