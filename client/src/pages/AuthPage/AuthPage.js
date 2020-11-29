import React, { useState } from 'react';
import "./Auth.css";


export const AuthPage = (props) => {
    const { formHandler, loginHandler, registrationHandler } = props;
    const { isFetching, message } = props;

    const [showModal, setModal] = useState(false)

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
                        onClick={() => setModal(true)}
                    >
                        Регистрация
                </button>
                </div>
            </form>
            <pre className='message'>{message}</pre>

            {
                showModal
                &&
                <div className={'regModalBackground'}>



                    <div className={'regModal'}>

                        <button
                            className='closeModal'
                            onClick={() => setModal(false)}
                        >
                            x
                    </button>
                        <span>Е-мейл</span>
                        <input
                            className={'authInput'}
                            id='mail'
                            type='email'
                            name='email'
                            onChange={formHandler}
                            placeholder='email'
                        />
                        <span>Пароль</span>
                        <input
                            className={'authInput'}
                            id={'pass'}
                            type='password'
                            name={'password'}
                            onChange={formHandler}
                            placeholder='password'
                        />
                        <span>Название СТО</span>
                        <input
                            type='text'
                            name='workplaceName'
                            className={'authInput'}
                            onChange={formHandler}
                            placeholder='Рога и копыта'
                        />
                        <span>Процент от работ(числом)</span>
                        <input
                            type='number'
                            name='percentLevel'
                            className={'authInput'}
                            onChange={formHandler}
                            placeholder='40% 50% 60%'
                        />
                        <span>День выплат(номер дня недели)</span>
                        <input
                            type='number'
                            name='paymentDay'
                            className={'authInput'}
                            onChange={formHandler}
                            placeholder='4 5 6'
                        />

                        <span>Выплантая неделя</span>
                        <select
                            type='select'
                            name='paymentRange'
                            className={'authInput'}
                            onChange={formHandler}
                            
                        >
                            <option name={'пн'}>пн-сб</option>
                            <option name={'вт'}>вт-пн</option>
                            <option name={'ср'}>ср-вт</option>
                            <option name={'чт'}>чт-ср</option>
                            <option name={'пт'}>пт-чт</option>
                            <option name={'сб'}>сб-пн</option>

                        </select>
                        <button
                            className='reg-btn'
                            disabled={isFetching}
                            onClick={() => { registrationHandler(); setModal(false) }}
                        >
                            Зарегистрироваться
                        </button>


                    </div>

                </div>
            }
        </div>


    )
}