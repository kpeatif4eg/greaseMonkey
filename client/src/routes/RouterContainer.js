import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {saveToLocalStorage} from '../store/actions/localStorageActions';
import { logout,logoutModal,logoutCloseModal,infoModal, infoCloseModal } from '../store/actions';
import { localStorageToken } from '../configs/config'
import {Router} from './routes';
import {httpRequest} from '../utils/API';

const RouterContainer = props => {
    const history = useHistory();
    useEffect(()=>{
        props.saveToLocalStor();
        //отправляем со всеми запросами токен для аутентификации

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
            // если ответ содержит свойство 'message' выбрасываем модалку с сообщением
                props.infoModal(resolve.data.message, true)

                setTimeout(() => {
                    props.infoCloseModal()
                }, (2000));
            }
            return resolve
        },
        err=>{

            if(err.response.data.message){
                props.infoModal(err.response.data.message, false);

                setTimeout(() => {
                    props.infoCloseModal()
                }, (2000));
            }

        //перехватчик для логаута когда токен закончился

            if(err.response && err.response.status === 401){
                props.logoutShowModal(err.response.data);
                history.push('/')
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
    infoModal: (message, isOk) => dispatch(infoModal(message, isOk)),
    infoCloseModal: () => dispatch(infoCloseModal())
})
const mapState = state => ({
    token: state.auth.token,
    isShowModal: state.auth.isModal,
    logoutMessage: state.auth.modalMsg.message,
    isShowInfoModal: state.global.infoShow,
    infoMessage: state.global.infoMessage,
    isOk: state.global.isOk,
})

export default connect(mapState, mapDispatch)(RouterContainer)