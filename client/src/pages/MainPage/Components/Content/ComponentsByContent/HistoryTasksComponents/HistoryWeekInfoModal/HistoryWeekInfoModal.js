import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HistoryDayMapping } from '../../HistoryTasksComponents/HistoryComponents/HistoryByDay/History';
import { CarsByWeek } from './CarsByWeekComponent';
import stl from './HistoryWeekInfoModal.module.css'

export const HistoryWeekDetailsModal = props => {
    const { info, setHistDetail } = props;
    const [isShowDetails, setShowDetails] = useState(false)
    return (
        info
        &&
        <div className='modalWrapper fade'>
            <div className='modalContainer'>
                <div className={'headNav'}>
                    <button onClick={() => setHistDetail(null)}>
                        Закрыть
                                </button>

                </div>
                <div className={stl.weekListItem}>
                    <span>Прибыль за неделю:</span>

                    <div className={stl.infoItemContanier}>
                        <span className={stl.profit}>{`${info.info.sumCostByWeek} грн `}
                            <span className={stl.percent}>
                                <span className={stl.symbol}>ЗП</span>
                                {`${info.info.withUserPercent} грн`}
                            </span>
                        </span>
                    </div>
                </div>
                <CarsByWeek info={info.info} />

                <div className={stl.weekListItem}>
                    <span>Самая прибыльная машина:</span>
                    <div className={stl.infoItemContanier}>
                        <span className={stl.mVCar}> {`${info.info.mostProfitCarName}`}</span>
                        <span className={stl.profit}>{`${info.info.mostProfitCarCost} грн `}

                            <span className={stl.percent}>
                                <span className={stl.symbol}>ЗП</span>
                                {`${info.info.mostProfitCarWithPercent} грн`}
                            </span>

                        </span>
                        <button
                            className={stl.detailBtn}
                            onClick={() => setShowDetails(!isShowDetails)}
                        >
                            {!isShowDetails ? 'Раскрыть' : 'Скрыть'}
                        </button>
                    </div>
                    {
                        isShowDetails && <div className={stl.topCarTasks} ><HistoryDayMapping tasks={info.info.mostProfitCarTasks} /></div>
                    }
                </div>



                <span className='modalBottom'>"ЗП" - чистая прибыль посчитана в соответствии с указанным процентом на <Link to='/main'>главной странице </Link> </span>
            </div>
        </div>
    )
}