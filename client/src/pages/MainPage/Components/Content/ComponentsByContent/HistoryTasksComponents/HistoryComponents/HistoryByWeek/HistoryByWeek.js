import React, { useEffect } from 'react';
import {WeekItems} from './HistoryWeekItems';


export const HistoryByWeek = props => {
    const { getRequestType, doneTasks, path} = props;

    //getRequestType выполняется в useeffect потому что мы изменяем useState в родительском компоненте
    useEffect(() => {
        getRequestType(path);
    })
    const getFirstAndLastDay = (arr) => {
        return {
            first: arr[0],
            last: arr[arr.length - 1]
        }
    }

    return props.doneTasks && props.doneTasks.type === 'week' 
        ? 
        <div className={'date_container'}>
            { 
                doneTasks.payload
                &&
                <Week {...props} payload={doneTasks.payload} dateRange={getFirstAndLastDay(doneTasks.payload)} />
            }
        </div>
        :
        'Пусто'
}

const Week = props => {
    return <div>
        <WeekItems {...props} />
    </div>
}

