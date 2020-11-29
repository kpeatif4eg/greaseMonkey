import React from 'react';
import stl from './ErrorPage.module.css'

export const ErrorPage = props => {
    return <div className={stl.errorContainer}>
        <h2>Ошибка</h2>
        {' '}
        <span>{props.error}</span>
    </div>
}