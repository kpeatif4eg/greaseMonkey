import React from 'react';
import {connect} from 'react-redux';
import {RestorePass} from './RestorePass';
import {updatePassword} from '../../store/actions/';

const RestorePassContainer = props => {
    return (
        <RestorePass {...props}/>
    )
}

const mapDispatch = dispatch => ({
    updPass:(data)=> dispatch(updatePassword(data))
});

export default connect(null, mapDispatch)(RestorePassContainer)