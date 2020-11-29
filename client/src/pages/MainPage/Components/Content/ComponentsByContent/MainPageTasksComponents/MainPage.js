import React,{useState} from 'react';
import stl from './MainPage.module.css';
import MainPageModalContainer from './MainPageModalContainer'
import { Loader } from '../../../Loader/Loader';

export const MainPage = props => {
    const { userInfo, userFetching } = props;
    const [showModal, setModal] = useState(false);

    return (
        <div className={stl.container}>
            {
                !userFetching
                ?
                <div className={stl.infoContainer}>
                    <div className={stl.info}>

                        <span>Почта</span>
                        <p className={stl.infoItem}>{userInfo.email}</p>

                        <span>Название станции</span>
                        <p className={stl.infoItem}>{userInfo.workplaceName}</p>

                        <span>Процент</span>
                        <p className={stl.infoItem}>{userInfo.percentLevel + ' %'}</p>
                        
                        <span>Выплатная неделя</span>
                        <p className={stl.infoItem}>{ userInfo.paymentRange }</p>
                        
                    </div>

                        { showModal && <MainPageModalContainer closeModal={()=>setModal(false)}/> }
                    <button onClick={()=>setModal(true)}> {'Редактировать данные'}</button>
                </div>
                :
                <Loader size='l'/>
            }
        </div>
    )
}