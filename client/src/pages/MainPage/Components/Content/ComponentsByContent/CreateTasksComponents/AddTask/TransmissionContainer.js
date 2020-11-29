import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const TransmissionContainer = props => {
    const typeOfMainSystem = 'transmission';

    return <GlobalTask
        area={props.transmission}
        changeHandlerStore={props.changeTransmissionInStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    transmission: state.tasks.transmission,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeTransmissionInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(TransmissionContainer);