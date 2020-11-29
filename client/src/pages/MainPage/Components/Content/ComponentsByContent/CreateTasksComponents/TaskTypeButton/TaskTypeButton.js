import React from 'react';
import {Link ,useRouteMatch} from 'react-router-dom';
import stl from './TaskTypeButton.module.css';

//компонент выбора типа работ: ходовая, мотор итд
export const TaskTypeButton = props => {
    const match = useRouteMatch()
    return(
        <Link to={match.url+props.path}>
            <button
                onClick={()=>props.setTopSideName(props.title)} 
                type='button' className={stl.button}>
                {props.title}
            </button>
        </Link>
    )
};

