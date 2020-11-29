import React from 'react';
import {connect} from 'react-redux';
import { CreateTaskMainComponent } from './CreateTaskMainComponent';

const CreateTaskContainer = props => {
    return <CreateTaskMainComponent {...props} />
}

const mapState = state => ({
    topSideTitle: state.global.taskMenuTitle
})

export default connect(mapState)(CreateTaskContainer)