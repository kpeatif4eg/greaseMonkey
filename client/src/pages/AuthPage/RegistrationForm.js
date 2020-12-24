
import React from 'react';
export const RegistartionForm = props => {
const {setRegisterModal, formHandler, registrationHandler, isFetching} = props;

    return (
        <div className={'regModalBackground'}>
            <div className={'regModal'}>

                <button
                    className='closeModal'
                    onClick={() => setRegisterModal(false)}
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

                <span>Выплатная неделя</span>
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
                    onClick={() => { registrationHandler(); setRegisterModal(false) }}
                >
                    Зарегистрироваться
                </button>

            </div>
        </div>
    )

}
