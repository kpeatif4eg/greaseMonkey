import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const DiagnosticContainer = props => {
    const typeOfMainSystem = 'diagnostic';

    return <GlobalTask
        area={props.diagnostic}
        changeHandlerStore={props.changeDiagnosticInStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    diagnostic: state.tasks.diagnostic,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeDiagnosticInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(DiagnosticContainer)