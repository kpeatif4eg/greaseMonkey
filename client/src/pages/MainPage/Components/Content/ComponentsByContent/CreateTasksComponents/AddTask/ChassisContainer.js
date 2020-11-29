import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const ChassisContainer = props => {
    const typeOfMainSystem = 'chassis';

    return <GlobalTask
        area={props.chassis}
        changeHandlerStore={props.changeChassisInStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    chassis: state.tasks.chassis,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeChassisInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(ChassisContainer)