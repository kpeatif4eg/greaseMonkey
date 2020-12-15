import React, { useState } from 'react';
import moment from 'moment';
import stl from '../History.module.css';


export const WeekItems = props => {


    const checkFirstDay = (days, index) => {
        const firstDay = days && days.filter((fItem, i) => {
            return (moment(fItem.date).format('DD') === '01');
        })
        if (firstDay.length) {
            return moment(firstDay[0].date).format('MMMM')
        } else if (!index) {
            return moment(days[0].date).format('MMMM')
        } else {
            return null
        }
    }

    //с помощью замыкания генерируем цвет rgb. 
    //в компоненте WeekDay если выпадает 1-ое число то генерируем новый цвет
    // до следующего 1 числа те каждый месяц в календаре работ отображается разным цветом
    const colorGenerator = () => {


        const randGen = (min, max) => {
            return Math.floor( min + Math.random() * (max + 1 - min));
          }

        let color = '';

        return (generate) => {
            if (generate) {
                return color
            }
            const r = randGen(10, 170)
            const g = randGen(50, 100)
            const b = randGen(70, 255)
            color = `(${r}, ${g}, ${b})` ;

        }

    }


    const colorGenScope = colorGenerator();
    colorGenScope();

    return props.payload.map((item, i) => {
        return <OneWeek 
            {...props}
            item={item}
            i={i}
            checkFirstDay={checkFirstDay}
            colorGen = {colorGenScope}
        />
    })
}




const OneWeek = props => {

    const { i, item, checkFirstDay, settingHistoryDetails } = props;
    const dayRangePerWeek = {
        firstDay: moment(item[0].date),
        //костыль для правильной выборки из базы, если не добавить один день, выборка будет без последнего дня недели
        lastDay: moment(item[item.length - 1].date).add(1, 'days')
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
                            <WeekDay {...dateItem} day={day} colorGen={props.colorGen} />
                        )
                    })
                }
                <button onClick={() => settingHistoryDetails(dayRangePerWeek)}>info</button>
            </div>


        </div>

    )
}



const WeekDay = props => {
    const today = moment().format('YYYY-MM-DD');
    if (props.day.format('DD') === '01') {
        props.colorGen();
    }

    return (

        <div
            key={props.date}
            // style={{ backgroundColor:`${props.day.format('dd') === 'вс' ? 'darkred': null}` }}
            style={{ backgroundColor: `rgb${props.colorGen(true)}` }}
            className={`${stl.dayWeek} ${props.haveBeenTasks && props.haveBeenTasks.length ? stl.checkedDay : ''} ${today === props.date ? stl.todayDay : ''}`}
        >
            <span style={{ fontSize: '10px', }}>{props.day.format('dd')}</span>
            <span>{props.day.format('DD')}</span>
        </div>

    )
}