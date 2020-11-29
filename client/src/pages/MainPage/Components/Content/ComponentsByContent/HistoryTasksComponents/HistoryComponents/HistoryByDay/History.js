import React,{useEffect} from 'react';
import moment from 'moment';
import {useRouteMatch} from 'react-router-dom';
import { locale } from 'moment/locale/ru';
import {VIEW_FORMAT_DATE_TMP} from '../../../../../../../../utils/constants';
import {HistoryItem} from './HistoryItem';
import stl from '../History.module.css'
import { tasks } from '../../../../../../../../store/reducers/taskHandling';


export const History = props => {
    const { doneTasks,getRequestType, path } = props;
    useEffect(()=>{
        getRequestType(path)
    }) 
    


    return Array.isArray(doneTasks && doneTasks.payload) && doneTasks.type === 'day'
        ? (
            <ol>
                {
                    doneTasks.payload.map(item => {
                        return <div key={item[0].date} className={stl.taskItem}>
                                
                            {               
                                item.map((subItem, i) => {
                                    return <React.Fragment key={subItem.tasks._id}>
                                        {
                                            !i
                                            &&
                                            <span className={stl.taskDate}>
                                                {moment(subItem.date, moment.ISO_8601).format(VIEW_FORMAT_DATE_TMP)}
                                            </span>
                                        }

                                        {

                                            // <HistoryDayCell tasks={subItem.tasks.tasks.data} />
                                            <ul className={stl.listItem}>
                                                <div className={stl.titleContainer}>

                                                    <div>
                                                        <span className={stl.mark} >{subItem.tasks.tasks.data.mark || 'Марка не указана'}</span>
                                                        {' '}
                                                        <span className={stl.mark}>{subItem.tasks.tasks.data.model}</span>
                                                    </div>

                                                    <span>{'Всего: ' + subItem.tasks.tasks.data.totalCost}</span>
                                                    
                                                    <button onClick={()=>{props.getTaskById(subItem.tasks._id)}} className={stl.btnChange}>
                                                        {'Изменить'}
                                                    </button>
                                                </div>
                                                 
                                                {
                                                    <HistoryDayMapping tasks={subItem.tasks.tasks.data.tasks}/>
                                                    // subItem.tasks.tasks.data.tasks.map((taskItem, i) => {
                                                    //     return <HistoryItem key={taskItem.id} taskItem={taskItem} i={i}/>
                                                    // })
                                                }
                                            </ul>
                                        }
                                    </React.Fragment>
                                })
                            }
                        </div>
                    }
                    )
                }

            </ol>
        )
        :
        <>
        <span> ¯ \ _ (ツ) _ / ¯</span>
        <span>пусто</span>
        </>
        // <Loader size='m'/>
}

export const HistoryDayMapping = props => {
   const {tasks} = props;
    return(
        tasks.map((taskItem, i) => {
            return <HistoryItem key={taskItem.id} taskItem={taskItem} i={i}/>
        })
    )
}