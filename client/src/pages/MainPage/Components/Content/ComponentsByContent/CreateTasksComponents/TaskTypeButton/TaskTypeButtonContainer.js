import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {TaskTypeButton} from './TaskTypeButton';
import {setTaskMenuTitle} from '../../../../../../../store/actions'


const TaskTypeButtonContainer = props => {

    return <TaskTypeButton {...props}/>
}

const mapDispatch = dispatch => ({
    setTopSideName: title => dispatch(setTaskMenuTitle(title))
})

export default connect(null, mapDispatch)(TaskTypeButtonContainer)
