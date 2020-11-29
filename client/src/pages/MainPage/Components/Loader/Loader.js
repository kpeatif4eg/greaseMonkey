import React from 'react';
import stl from './Loader.module.css';

export const Loader = props => {
    const {size} = props
    return <div className={stl.container + ' ' + stl[size]}>
        <span className={stl.text}>loading</span>
        <div className={stl.loader}> </div>
    </div>
}

