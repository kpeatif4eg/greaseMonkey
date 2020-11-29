import React, { useState } from 'react';
import stl from './HistoryWeekInfoModal.module.css'

export const CarsByWeek = props => {

    const [isShowAllCars, setCars] = useState(false)
    const { info } = props;
    console.log(props)
    return (
        <>
            <div className={stl.weekListItem}>
                <span>Машин за неделю: </span>
                <button onClick={()=> setCars(!isShowAllCars)}>{!isShowAllCars ? 'Раскрыть' : 'Скрыть'}</button>
                <div className={stl.infoItemContanier}>
                    <span className={stl.profit}>{info.carsCount} шт.</span>
                </div>

                {
                    isShowAllCars && <div className={stl.allCarsContainer}>
                        <ul className={stl.carList}>
                            {
                                info.carList && info.carList.map(item => {

                                    return <li className={stl.listItem} key={item.date + item.car}>
                                        <div className={stl.mark}>{item.car.trim() || 'Марка не указана'}</div>
                                        <div className={stl.date}>{item.date}</div>
                                        <div className={stl.cost}>{item.cost}</div>
                                    </li>

                                })
                            }
                        </ul>
                    </div>
                }

            </div>
           
        </>
    )
}