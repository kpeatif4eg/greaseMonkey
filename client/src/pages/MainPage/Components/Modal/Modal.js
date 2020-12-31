import React from 'react';
import stl from './Modal.module.css';

export const Modal =    props => {
    const {okButton, noButton, message, description, isOk} = props;
    return (
        <div className={`${stl.bg} ${ !okButton ? stl.fade_In_Out : stl.fade_In}`}>
            <div className={`${isOk ? stl.okModal: stl.falseModal}`}>
                <h6 className={stl.title}>
                    {description&&description}
                </h6>
                <span className={stl.content}>
                    {message&&message}
                </span>
                <div className={stl.modalBtnContainer}>
                    {
                        okButton
                        ?
                        <button className={stl.modalBtn} onClick={()=>okButton()}> Ok  </button>
                        :
                        null
                    }
                    {
                        noButton
                        ?
                        <button className={stl.modalBtn} onClick={()=>noButton()} > No </button>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}