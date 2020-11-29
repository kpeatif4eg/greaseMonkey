import React from 'react';
import {ContentPage} from './Content';
import {connect} from 'react-redux';
import { settingTaskList } from '../../../../store/actions'

const mapDispatch = dispatch => ({
    setTaskList: payload => dispatch( settingTaskList(payload) ),
})

export default connect(null, mapDispatch)(ContentPage)