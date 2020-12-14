import React, { useState } from 'react';
import moment from 'moment';
import stl from '../History.module.css';


export const WeekItems = props => {
    const checkFirstDay = (days, index) => {
        const firstDay = days && days.filter((fItem, i) => {
            return (moment(fItem.date).format('DD') === '01');
        })
        if (firstDay.length){
            return moment(firstDay[0].date).format('MMMM')
        } else if ( !index ){
            return moment(days[0].date).format('MMMM')
        } else {
            return null
        }
        
      
    }
    return props.payload.map((item, i) => {
        return <OneWeek {...props} item={item} i={i} checkFirstDay={checkFirstDay} />
    })
}




const OneWeek = props => {
    
    const { i, item, checkFirstDay,settingHistoryDetails } = props;
    const dayRangePerWeek = {
        firstDay: moment(item[0].date),
        //костыль для правильной выборки из базы, если не добавить один день, выборка будет без последнего дня недели
        lastDay: moment(item[item.length-1].date).add(1,'days')
    }
    

    return (

        <div key={i} className={stl.dateItemWeek}>

            {
                <div className={checkFirstDay(item, i) && stl.monthName}>
                    {checkFirstDay(item, i)}
                </div>

            }
            <div className={stl.weekWeek}>
                {
                    item.map(dateItem => {
                        const day = moment(dateItem.date);
                        return (
                            <WeekDay {...dateItem} day={day} />
                        )
                    })
                }
                <button onClick={()=>settingHistoryDetails(dayRangePerWeek)}>info</button>
            </div>


        </div>

    )
}



const WeekDay = props => {
    const today = moment().format('YYYY-MM-DD');
    return (

            <div
                key={props.date}
                style={{ backgroundColor:`${props.day.format('dd') === 'вс' ? 'darkred': null}` }}
                className={`${stl.dayWeek} ${props.haveBeenTasks && props.haveBeenTasks.length ? stl.checkedDay : ''} ${today === props.date ? stl.todayDay : ''}`}
            >
                <span style={{ fontSize: '10px',}}>{props.day.format('dd')}</span>
                <span>{props.day.format('DD')}</span>
            </div>

    )
}