import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const EngineContainer = props => {
    const typeOfMainSystem = 'engine';

    return <GlobalTask
        area={props.engine}
        changeHandlerStore={props.changeEngineInStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    engine: state.tasks.engine,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeEngineInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(EngineContainer);