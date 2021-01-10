import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { 
        setTaskOptions, 
        setCustomTitle, 
        setCustomTask, 
        setCustomCost, 
        addCustomTask, 
        addCustomTaskItem,
        removeCustomTask, 
        removeCustomTaskItem 
    } from '../../../../../../../store/actions';

const CustomContainer = props => {
    const typeOfMainSystem = 'custom';
    return (
        <GlobalTask
            {...props}
            area={props.customTask}
            changeHandlerStore={props.changeCustomTaskInStore}
            error={props.error}
            typeOfMainSystem={typeOfMainSystem}

        />
    )
}


const mapState = state => ({
    customTask: state.tasks.customTask,

    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeCustomTaskInStore: payload => dispatch(setTaskOptions(payload)),
    setCustomTitle: payload => dispatch(setCustomTitle(payload)),
    setCustomTask: payload => dispatch(setCustomTask(payload)),
    setCustomCost: payload => dispatch(setCustomCost(payload)),
    addCustomTask: payload=>dispatch(addCustomTask(payload)),
    addCustomTaskItem: payload=>dispatch(addCustomTaskItem(payload)),
    removeCustomTask: payload => dispatch(removeCustomTask(payload)),
    removeCustomTaskItem: payload => dispatch(removeCustomTaskItem(payload)),
})

export default connect(mapState, mapDispatch)(CustomContainer)