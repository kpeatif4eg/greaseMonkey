import React, { useEffect, useState } from 'react';
import moment from 'moment'
import stl from './historyByMonth.module.css'

export const HistoryByMonth = props => {

    const { getRequestType, path } = props;

    const [isShowStatistic, setStatistic] = useState(false);
    useEffect(() => {
        getRequestType(path)
    })
    const carsStatistic = (obj) =>{
        const arr = [];
        for(let key in obj){
            arr.push({car:key , count:obj[key]})
        }
        return arr;
    }

    
    return (
        <div className=''>

            {
                props.doneTasks
                &&
                props.doneTasks.payload
                &&
                props.doneTasks.type === 'month' && props.doneTasks.payload.map(item =>{
                    return(
                        <div className={stl.monthsContainer}>
                            <h4 className={stl.title}>{ item.date.toUpperCase()}</h4>
                            <div>Машин отремонтировано: {item.coll.carsCount}</div>
                            <div>Заработок всего: {item.coll.totalCost}</div>
                            <div>Чистая прибыль: {item.coll.pureProfit}</div>
                            <div>Работ выполнено: {item.coll.totalTaskCount}</div>
                            <button onClick={()=>setStatistic(!isShowStatistic)}>
                                {
                                    !isShowStatistic
                                    ?
                                    'Статистика автомобилей'
                                    :
                                    'Скрыть'
                                }
                            </button>
                            {
                                isShowStatistic
                                &&
                                <ul onClick={()=>setStatistic(!isShowStatistic)}>
                                    {
                                        carsStatistic(item.coll.marks).map(item=>{
                                            return <li className={stl.listItem}>{item.car} 
                                                <span className={stl.carCount}>{item.count}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}



