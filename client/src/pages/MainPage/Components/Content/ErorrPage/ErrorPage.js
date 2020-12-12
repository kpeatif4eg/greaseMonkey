import React from 'react';
import stl from './ErrorPage.module.css';
import { connect } from 'react-redux';


export const ErrorPage = props => {
    return (

        <div className={stl.errorContainer}>
            <h2>Ошибка</h2>
            {' '}
            <span>{props.error}</span>
        </div>
    )
}




export default ErrorPage