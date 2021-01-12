import React,{ useState} from 'react';
import stl from './historyByMonth.module.css';


export const MonthItem = props => {

    const [isShowStatistic, setStatistic] = useState(false);

    const carsStatistic = (obj) =>{
        const arr = [];
        for(let key in obj){
            arr.push({car:key , count:obj[key]})
        }
        return arr;
    }


    return (
        <div className={stl.monthsContainer}>
            <h4 className={stl.title}>{ props.date.toUpperCase()}</h4>
            <div>Машин отремонтировано: {props.coll.carsCount}</div>
            <div>Заработок всего: {props.coll.totalCost}</div>
            <div>Чистая прибыль: {props.coll.pureProfit}</div>
            <div>Работ выполнено: {props.coll.totalTaskCount}</div>
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
                        carsStatistic(props.coll.marks).map(item=>{
                            return <li className={stl.listItem}>{item.car} 
                                <span className={stl.carCount}>{item.count}</span>
                            </li>
                        })
                    }
                </ul>
            }
        </div>
    )
}