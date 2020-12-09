import React, {useEffect} from 'react';
import {Router} from './routes';
import {connect} from 'react-redux';
import {saveToLocalStorage} from '../store/actions/localStorageActions';
import { logout,logoutModal,logoutCloseModal,infoModal, infoCloseModal } from '../store/actions';
import { localStorageToken } from '../configs/config'
import {httpRequest} from '../utils/API';

const RouterContainer = props => {
    useEffect(()=>{
        props.saveToLocalStor();

        httpRequest.interceptors.request.use(cfg=>{
            const token = localStorage.getItem(localStorageToken);
            if (token) {
                cfg.headers.Authorization = `Bearer ${token}`
            }
            return cfg
        },
        err=>{
            return Promise.reject(err)
        }

        )
        httpRequest.interceptors.response.use(resolve=>{
            if(resolve.data.message){
                props.infoModal(resolve.data.message)

                setTimeout(() => {
                    props.infoCloseModal()
                }, (4000));
            }
            return resolve
        },
        err=>{
            if(err.response && err.response.status === 401){
                props.logoutShowModal(err.response.data);
            }
            return Promise.reject(err);
        
        })

    },[props]);


    
    return(
        <Router
            {...props}
            hideAuth={localStorage.getItem(localStorageToken)} 
            okHandler ={()=>{props.logout(); props.logoutHideModal()}} />
    )
}

const mapDispatch = dispatch => ({
    saveToLocalStor: ()=> dispatch(saveToLocalStorage()),
    logout: () => dispatch(logout()),
    logoutShowModal: message => dispatch(logoutModal(message)),
    logoutHideModal: () => dispatch(logoutCloseModal()),
    infoModal: message => dispatch(infoModal(message)),
    infoCloseModal: () => dispatch(infoCloseModal())
})
const mapState = state => ({
    token: state.auth.token,
    isShowModal: state.auth.isModal,
    logoutMessage: state.auth.modalMsg.message,
    isShowInfoModal: state.global.infoShow,
    infoMessage: state.global.infoMessage
})

export default connect(mapState, mapDispatch)(RouterContainer)