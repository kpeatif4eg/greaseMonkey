import React from 'react';
import {Modal} from './Modal'
import {connect} from 'react-redux';

const ModalContainer = props => {
    return(
        <Modal {...props}/>
    )
}

export default connect()(ModalContainer)