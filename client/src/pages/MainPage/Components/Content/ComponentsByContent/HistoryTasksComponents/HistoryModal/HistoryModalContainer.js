import React from 'react';
import { connect } from 'react-redux';
import { HistoryModal } from './HistoryModal';
import {
    setTaskForChange,
    setHistTitle,
    setHistCOst,
    setHistModel,
    setHistMark,
    setHistTask,
    setHistSide,
    setHistSubWork,
    addHistSide,
    delHistSide,
    addHistSubWork,
    delHistSubwork,
    delHistTask,
    updateTask,
    deleteTask,
    setHistDate
} from '../../../../../../../store/actions';




const HistoryModalContainer = props => {
    const { taskForChange } = props;

    return (
        <HistoryModal {...props} />
    )
}

const mapState = state => ({
    taskForChange: state.historyModal.taskForChange
})

const mapDispatch = dispatch => ({
    clearTaskForChange: zeroOut => dispatch(setTaskForChange(zeroOut)),
    setTitle: title => dispatch(setHistTitle(title)),
    setCost: cost => dispatch(setHistCOst(cost)),
    setMark: mark => dispatch(setHistMark(mark)),
    setModel: model => dispatch(setHistModel(model)),
    setSide: side => dispatch(setHistSide(side)),
    setSubWork: subWork => dispatch(setHistSubWork(subWork)),
    addTask: id => dispatch(setHistTask(id)),
    addSide: id => dispatch(addHistSide(id)),
    addSubwork: id => dispatch(addHistSubWork(id)),
    delSubWork: id => dispatch(delHistSubwork(id)),
    delSide: id => dispatch(delHistSide(id)),
    delTask: id => dispatch(delHistTask(id)),
    updateTask: taskAndId => dispatch(updateTask(taskAndId)),
    deleteTask: id => dispatch(deleteTask(id)),
    setHistDate: date =>dispatch(setHistDate(date))
})

export default connect(mapState, mapDispatch)(HistoryModalContainer)