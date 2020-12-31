import React, { useState } from 'react';
import stl from './MainPage.module.css';


export const MainPageModal = props => {
    const { user } = props;
    const [isShowPassInputs, setShowInputs] = useState(false);
    
    
    const comparePass = () =>{
        const {pass} = props;
        if(pass.pass1 === pass.pass2 && !pass.pass1.length){
            return true
        }
        return pass.pass1 === pass.pass2 && pass.pass1.length >= 6;
    }

    return (
        <div className={`modalWrapper fade`}>
            <div style={{ display: "flex", flexDirection: 'column' }} className={`${stl.modalContainer} modalContainer `}>
               
                <span className={stl.title}>Название станции</span>
                <input
                    placeholder={user.workplaceName}
                    name='workplaceName' type='text'
                    onChange={(e) => props.changeUserInfo({ value: e.target.value, key: e.target.name })}
                />
                <span className={stl.title}>Процент</span>
                <input
                    placeholder={user.percentLevel}
                    name='percentLevel' type='text'
                    onChange={(e) => props.changeUserInfo({ value: e.target.value, key: e.target.name })}
                />
                <span className={stl.title}>Выплатная неделя</span>
                <select
                    defaultValue={user.paymentRange}
                    name='paymentRange' type='text'
                    onChange={(e) => props.changeUserInfo({ value: e.target.value, key: e.target.name })}
                >
                    <option name={'пн'}>пн-сб</option>
                    <option name={'вт'}>вт-пн</option>
                    <option name={'ср'}>ср-вт</option>
                    <option name={'чт'}>чт-ср</option>
                    <option name={'пт'}>пт-чт</option>
                    <option name={'сб'}>сб-пн</option>
                </select>
                <span className={stl.title}>Email</span>
                <input
                    placeholder={user.email} name='email' type='email'
                    onChange={(e) => props.changeUserInfo({ value: e.target.value, key: e.target.name })}
                />
                <label>
                    <span className={stl.title}>Изменить пароль</span>
                    <input name='isEditPass' type='checkbox' onClick={(e) => {
                            setShowInputs(!isShowPassInputs);
                            props.changeUserInfo({ key: e.target.name, value: e.target.checked })
                        }} />
                </label>
                {
                    isShowPassInputs
                    &&
                    <div className={stl.passContainer}>
                    <span className={stl.title}>Старый пароль</span>
                    <input
                        type='password'
                        placeholder={user.passWord}
                        name='passWord'
                        onChange={(e) => props.changeUserInfo({ value: e.target.value, key: e.target.name })}
                    />
                    <span className={stl.title}>Новый пароль</span>
                    <input
                        className={!comparePass() && stl.wrongNewPass}
                        type='password'
                        name='pass1'
                        onChange={(e)=>{
                            props.compPass(e.target);
                            props.changeUserInfo({ value: e.target.value, key: e.target.name })
                        }}
                    />
                    <span className={stl.title}>Новый пароль</span>
                    <input 
                        className={!comparePass() && stl.wrongNewPass}
                        type='password'
                        name='pass2'
                        onChange={(e)=>{
                            props.compPass(e.target);
                            props.changeUserInfo({ value: e.target.value, key: e.target.name })
                        }}
                    />

                    </div>
                }
                <div className={stl.btnBlock}>
                 <button 
                    className={`btn ${stl.modalCloseBtn}`}
                    onClick={() => props.closeModal()}>
                    закрыть
                </button>
                <button
                    className={`btn`}
                    onClick={() => {  console.log(user); props.saveNewInfo(user) }}
                    disabled={!comparePass()}
                >
                    Сохранить
                </button>
                </div>
            </div>
        </div>
    )
}