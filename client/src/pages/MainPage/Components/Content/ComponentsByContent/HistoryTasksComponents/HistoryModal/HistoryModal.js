import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { HistoryItem } from '../HistoryComponents/HistoryByDay/HistoryItem';
import moment from 'moment';
import ModalContainer  from '../../../../Modal/ModalContainer'
import stl from './HistoryModal.module.css';


export const HistoryModal = props => {
    const [isShowModal, setShowModal] = useState(false);

    const { taskForChange } = props;

    const updateHandler = () =>{
        props.updateTask(
            {
                id: taskForChange._id,
                task: taskForChange.tasks.data,
                date:taskForChange.date,
            }
        ) 
    }
    return <>
        {taskForChange
            &&
            <div className={`modalWrapper fade`}>
                <div className={`modalContainer`}>
                    <div className={'headNav'}>
                        <button onClick={() => props.clearTaskForChange(null)}>Закрыть</button>
                        <span className={stl.costNav}>{taskForChange.tasks.data.totalCost + ' грн'}</span>
                        <button
                            onClick={updateHandler} >
                            Сохр.
                        </button>
                        <button onClick={() => setShowModal(true)}> Удалить </button>
                    </div>
                    <span style={{ backgroundColor: 'orange' }}>{taskForChange._id}</span>
                    <input type='date' onChange={(e)=> props.setHistDate(e.target.value)} defaultValue={moment(taskForChange.date).format('YYYY-MM-DD')}/>

                    <div>Марка: </div>
                    <input
                        defaultValue={taskForChange.tasks.data.mark}
                        onChange={e => props.setMark(e.target.value)}
                    />


                    <div>Модель: </div>
                    <input
                        defaultValue={taskForChange.tasks.data.model}
                        onChange={e => props.setModel(e.target.value)}
                    />

                    {
                        taskForChange.tasks.data.tasks.map((taskItem, i) => {
                            return <HistoryItem key={taskItem.id} handlers={{ ...props }} taskItem={taskItem} i={i} isEdit={true} />

                        })
                    }

                    <button onClick={() => props.addTask({ id: v4(), newId: v4() })}> Добавить работу </button>
                </div>
            </div>
        }

        {
            isShowModal && <ModalContainer
                message={'Вы уревены что хотите удалить запись?'}
                description={'Удаление записи'}
                noButton={() => setShowModal(false)}
                okButton={() => { setShowModal(false); props.deleteTask({ id: taskForChange._id }) }}
            />
        }
    </>
}

