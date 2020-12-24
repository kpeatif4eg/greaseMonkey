import React, { useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

import stl from './RestorePass.module.css';


export const RestorePass = props => {
    const PASS_LENGTH = 6;
    const history = useHistory();
    const params = useParams();
    const [passInputs, setInputs] = useState({first: '', second:''});

    const inputsHandler = (e) =>{
        setInputs({...passInputs,[e.target.name]: e.target.value})
    };
    const compareInputs = () => {
        return !(passInputs.first === passInputs.second)
    }
    const passLengthController = () =>{
       return ( passInputs.first.length < PASS_LENGTH || passInputs.second.length < PASS_LENGTH)
    }
    return (
        <div className={stl.form}>
            <span>Длина пароля не менее 6 символов</span>
            <input 
                className={stl.input}
                style={{backgroundColor: `${compareInputs() ? 'red': '#deb887'} `}}
                name='first' onChange={(e)=>{inputsHandler(e)}}
                type='password'
                placeholder='Пароль1'
            />
            <input 
                className={stl.input}
                style={{backgroundColor: `${compareInputs() ? 'red': '#deb887'} `}}
                name='second' onChange={(e)=>{inputsHandler(e)}}
                type='password'
                placeholder='Пароль2'
            />
            <button
                disabled={passLengthController() || compareInputs()}
                onClick={(e)=> {
                    e.preventDefault();
                    props.updPass({token: params.token, pass: passInputs.second});
                }}
            >
                Сохранить
            </button>
            
            <button onClick={()=> history.push('/')}>На главную</button>
        </div>
    )
}