import { logoutModal, logoutCloseModal, infoCloseModal, infoModal } from './authActions';

import {login, registration, logout, sendEmail} from './asyncActions/asyncAuth';

import { saveToLocalStorage, } from './localStorageActions';

import {
    setTaskOptions,
    setTaskForChange,
    setChoosedTasks,


} from './tasksActions';

import {
    settingTaskList,
    sendingChoosedTasks,
    getTasks,
    getTaskById,
} from './asyncActions/asyncTasks';

import { settingAutomobileList, settingMark, setMark, setModel } from './automobileActions';

import { hideModal, showModal, setTaskMenuTitle } from './commonActions';

import {
    setHistCOst,
    setHistDate,
    setHistMark,
    setHistModel,
    setHistSide,
    setHistTask,
    setHistTitle,
    setHistSubWork,
    addHistSubWork,
    delHistSubwork,
    delHistTask,
    addHistSide,
    delHistSide,
    updateTask,
    deleteTask,
} from './historyModalChangeActions'

import {updatePassword} from './asyncActions/asyncRestorePass'

import { gettingUserInfo, changeUserInfo, changingUserInfo } from './userAcions'

import { settingHistoryDetails, setHistoryDatails } from './historyModalWeekDetails';

export {
    login,
    registration,
    saveToLocalStorage,
    settingTaskList,
    setTaskOptions,
    settingAutomobileList,
    settingMark,
    setMark,
    setModel,
    setChoosedTasks,
    sendingChoosedTasks,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    logout,
    logoutModal,
    logoutCloseModal,
    hideModal,
    showModal,
    setTaskForChange,
    setHistCOst,
    setHistDate,
    setHistMark,
    setHistModel,
    setHistSide,
    setHistTask,
    setHistTitle,
    setHistSubWork,
    addHistSubWork,
    delHistSubwork,
    delHistTask,
    addHistSide,
    delHistSide,
    gettingUserInfo,
    changeUserInfo,
    changingUserInfo,
    infoCloseModal,
    infoModal,
    settingHistoryDetails,
    setHistoryDatails,
    setTaskMenuTitle,
    sendEmail,
    updatePassword,
};
