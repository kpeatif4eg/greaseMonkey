import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const MaintainContainer = props => {
    const typeOfMainSystem = 'maintain';
    return <GlobalTask
        area={props.maintain}
        changeHandlerStore={props.changeMaintainStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    maintain: state.tasks.maintain,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeMaintainStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(MaintainContainer);