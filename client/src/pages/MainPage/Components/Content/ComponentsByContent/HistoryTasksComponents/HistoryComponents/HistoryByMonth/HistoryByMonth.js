import React, { useEffect, useState } from 'react';
import moment from 'moment';
import stl from './historyByMonth.module.css';
import {MonthItem} from './HistoryByMonthItem';

export const HistoryByMonth = props => {

    const { getRequestType, path } = props;

    
    useEffect(() => {
        getRequestType(path)
    })
    

    
    return (
        <div className=''>

            {
                props.doneTasks
                &&
                props.doneTasks.payload
                &&
                props.doneTasks.type === 'month' && props.doneTasks.payload.map(item =>{
                    return <MonthItem {...item}/>
                })
            }

        </div>
    )
}



