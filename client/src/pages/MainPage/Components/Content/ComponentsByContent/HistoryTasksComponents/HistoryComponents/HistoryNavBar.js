import React from 'react';
import {Link, useRouteMatch, useLocation} from 'react-router-dom';
import stl from './History.module.css';

export const HistoryNavBar = props => {
    const {match ,timeType} = props;

    const x = useLocation();
    return (
        <div className={stl.navBar}>
            <Link className={stl.navBarLink} to ={`${match}/day`} ><button className={timeType === 'day' ? `btn ${stl.navBarChecked}` : `btn` } >Все дни</button></Link>
            <Link className={stl.navBarLink} to ={`${match}/week`} ><button className={timeType === 'week' ? `btn ${stl.navBarChecked}` : `btn` } >Недели</button></Link>
            <Link className={stl.navBarLink} to ={`${match}/month`}><button className={timeType === 'month' ? `btn ${stl.navBarChecked}` : `btn` } >Месяцы</button></Link>
        </div>
    )
}