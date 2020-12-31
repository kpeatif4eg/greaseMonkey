import React from 'react';
import {Link ,useLocation} from 'react-router-dom'
import stl from './DoneButton.module.css';
import Modal from '../../../../Modal/ModalContainer'

export const DoneButton =props => {
    const location = useLocation();
    const { saveTasksToServer,isShowModal, hideModal, messageForModal, descriptionforModal } = props;
    return (
        <>
        <button
            className={`btn ${stl.btn}`}
            onClick={saveTasksToServer}
        >
            Готово
            {/* <span className={stl.btnCount}>1</span> */}
        
        </button>

        {
            isShowModal && <Modal message={messageForModal} description={descriptionforModal} okButton={()=>hideModal()} />
        }
        </>
    )
}