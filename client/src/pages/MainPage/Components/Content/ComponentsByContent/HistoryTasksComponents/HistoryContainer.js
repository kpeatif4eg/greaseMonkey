import React, { useEffect,useState} from 'react';
import { HistoryComponent } from './HistoryComponents/HistoryComponent';
import { connect } from 'react-redux';
import { getTasks, updateTask, getTaskById, settingHistoryDetails, } from '../../../../../../store/actions';


const HistoryContainer = props => {
    const [reqFlag, setReqFlag] = useState('')
    useEffect(()=>{
        reqFlag && props.getTasks(reqFlag);
    },[reqFlag, props.haveBeenChanged])

    const getRequestType = type => {
        setReqFlag(type);
    }
    

    return <HistoryComponent {...props} getRequestType={getRequestType} />
}

const mapState = state => ({
    tasks:state.tasks.choosedTasks,
    doneTasks: state.history.doneTasks,
    haveBeenChanged: state.historyModal.updatedTask,
    isFetching: state.history.isFetchingHistoryPage
});

const mapDispatch = dispatch => ({
    getTasks: param => dispatch(getTasks(param)),
    updateTask: task => dispatch(updateTask(task)),
    getTaskById: id => dispatch(getTaskById(id)),
    settingHistoryDetails: details => dispatch(settingHistoryDetails(details))
});
export default connect(mapState,mapDispatch)(HistoryContainer);