import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions';

const CustomContainer = props => {
    const typeOfMainSystem = 'customTask';
    return (
        <GlobalTask
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
    changeCustomTaskInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(CustomContainer)