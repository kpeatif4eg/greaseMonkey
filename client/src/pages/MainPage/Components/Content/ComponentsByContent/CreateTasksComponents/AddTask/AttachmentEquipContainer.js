import React from 'react';
import { connect } from 'react-redux';
import GlobalTask from './GlobalTasksContainer';
import { setTaskOptions } from '../../../../../../../store/actions'


const AttachmentEquipContainer = props => {
    const typeOfMainSystem = 'attachmentEquip';
    return <GlobalTask
        area={props.attachment}
        changeHandlerStore={props.changeAttachmentEquipInStore}
        error={props.error}
        typeOfMainSystem={typeOfMainSystem}
    />
};

const mapState = state => ({
    attachment: state.tasks.attachmentEquip,
    error: state.tasks.error,
});

const mapDispatch = dispatch => ({
    changeAttachmentEquipInStore: payload => dispatch(setTaskOptions(payload))
})

export default connect(mapState, mapDispatch)(AttachmentEquipContainer)