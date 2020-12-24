import React, { useState } from 'react';

export const RestoreAccount = props => {
    const [email, setEmail] = useState('');
    const {setRestoreModal} = props;
    return(
        <div className={'regModalBackground'}>
            <div className={'regModal'}>
            <button
                    className='closeModal'
                    onClick={() => setRestoreModal(false)}
                >
                    x
                </button>
                <span>Введите емейл укзанный при регистрации, а затем проверьте почту</span>

                <input type='email' onChange={(e)=>setEmail(e.target.value)}/>

                <input 
                    type='button'
                    value='Получить пароль'
                    onClick={()=>props.sendPassToMail(email)}
                />
            </div>
        </div>
    )
}