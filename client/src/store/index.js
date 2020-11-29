import {combineReducers} from 'redux';
import {auth} from './reducers/authHandling';
import {tasks} from './reducers/taskHandling';
import {marks} from './reducers/automobileListHandling';
import {global} from './reducers/commonHandlings';
import {historyModal} from './reducers/historyModalHandling';
import {history} from './reducers/historyHandling';
import {user} from './reducers/userHandling';
import {weekInfo} from './reducers/historyWeekInfoModal'


export default combineReducers({
    auth,
    tasks,
    marks,
    global,
    history,
    historyModal,
    user,
    weekInfo
})