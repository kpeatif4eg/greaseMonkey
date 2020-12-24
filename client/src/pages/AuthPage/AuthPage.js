import React, { useState } from 'react';
import { RegistartionForm } from './RegistrationForm';
import { RestoreAccount } from './RestoreAccount';
import "./Auth.css";


export const AuthPage = (props) => {
    const { formHandler, loginHandler, registrationHandler } = props;
    const { isFetching, message } = props;

    const [showRegisterModal, setRegisterModal] = useState(false);
    const [showRestoreModal, setRestoreModal] = useState(false);

    const formHadler = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            loginHandler()
        }
    }

    return (
        <div className='form-wrapper'>
            <form
                onSubmit={e => formHadler(e)}
                className='auth-form '>
                <span></span>
                <input
                    className={'authInput'}
                    placeholder={'Емейл'}
                    id='mail'
                    type='email'
                    name='email'
                    onChange={formHandler}
                />
                <span></span>
                <input
                    className={'authInput'}
                    placeholder={'Пароль'}
                    id={'pass'}
                    type='password'
                    name={'password'}
                    onChange={formHandler}
                />
                <div className='button-wrapper'>
                    <button
                        className='login-btn'
                        disabled={isFetching}
                        onClick={loginHandler}
                    >
                        Вход
                </button>
                    <button
                        className='reg-btn'
                        disabled={isFetching}
                        onClick={() => setRegisterModal(true)}
                    >
                        Регистрация
                </button>
                    <button
                        className={'forgetButton'}
                        onClick={()=>setRestoreModal(true)}
                    >
                        Я забыл пароль
                    </button>
                </div>
            </form>
            <pre className='message'>{message}</pre>

            {

                showRegisterModal
                &&
                <RegistartionForm
                    setRegisterModal={setRegisterModal}
                    formHandler={formHandler}
                    registrationHandler={registrationHandler}
                    isFetchin={isFetching}
                />
            }

            {
                showRestoreModal
                &&
                <RestoreAccount
                    setRestoreModal={setRestoreModal}
                    sendPassToMail={props.sendPassToMail}
                />

            }
        </div>


    )
}