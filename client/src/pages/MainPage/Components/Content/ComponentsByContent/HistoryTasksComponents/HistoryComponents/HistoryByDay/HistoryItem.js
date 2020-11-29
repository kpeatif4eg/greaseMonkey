import React from 'react';
import stl from '../History.module.css';
import {v4} from 'uuid';

export const HistoryItem = props => {
    const { taskItem, i, isEdit, editHandler } = props;
    return (

        //Ordinary HistItem 

        !isEdit
            ?
            <li className={stl.liItem}>
                <span className={stl.taskType}>{taskItem.title}</span>
                {taskItem.names && taskItem.names.map((nameItem, i) => {
                    return <React.Fragment key={i}>
                        <div key={nameItem.side} className={stl.taskName}> {nameItem.side} </div>

                        {
                            nameItem.subWork && nameItem.subWork.map((subItem, i) => {
                                return <div key={i} className={stl.taskSubItem}> {subItem.name} </div>
                            })
                        }

                    </React.Fragment>
                })}
                <span className={stl.taskCost}>{taskItem.cost !== undefined ? taskItem.cost : '0' + ' грн'}</span>
            </li>

            :

            //Editable HistItem

            <li className={stl.liItem}>
                <button
                    onClick={()=>props.handlers.delTask({id:taskItem.id})}
                > Уд. работу</button>
                <span className={stl.inputDescription}>Заголовок</span>
                <input
                    className={stl.taskType}
                    defaultValue={taskItem.title}
                    //setTitle
                    onChange={(e) => props.handlers.setTitle({ value: e.target.value, id: taskItem.id })}
                />
                <div className={stl.sideTitle}>
                    <span className={stl.inputDescription}>Назв.Работы/Сторона</span>
                    
                    <button 
                    //addSide
                        onClick={() =>props.handlers.addSide({id: taskItem.id, newId: v4()})}
                    >
                        Доб. поле
                    </button>

                </div>
                {taskItem.names && taskItem.names.map((nameItem, mainI) => {
                    return <React.Fragment key={nameItem.id}>
                        <div className={stl.sideWrapper}>
                            <input
                                className={stl.taskName}
                                defaultValue={nameItem.side}
                                //setSide
                                onChange={e => props.handlers.setSide({ value: e.target.value, i: mainI, id: taskItem.id })}
                            />
                            <button
                                //delSide
                                onClick={()=>props.handlers.delSide({id:taskItem.id, i:mainI})}
                            >   
                            {/* delete Icon */}
                                &#128465;
                            </button>
                            <button
                                //addSubwork
                                onClick={()=> props.handlers.addSubwork({id: taskItem.id, nameId: nameItem.id, newId: v4()})}
                            >&#9997;</button>
                        </div>

                        <div className={nameItem.subWork && stl.subWorkContainer}>
                            {
                                nameItem.subWork
                                &&
                                <span className={stl.inputDescription}>Детально</span>
                            }
                            {
                                nameItem.subWork && nameItem.subWork.map((subItem, subI) => {
                                    return <div className={stl.subWork} key={subItem.id}>
                                        <input
                                            defaultValue={subItem.name}
                                            className={`${stl.taskSubItem} ${stl.inputTaskSubItem}`}
                                            //setSubwork
                                            onChange={e => props.handlers.setSubWork({ subI, value: e.target.value, i: mainI, id: taskItem.id })}
                                        /> 
                                        <button 
                                            onClick={() => props.handlers.delSubWork({id: taskItem.id,  i:subI, nameId:nameItem.id})}
                                        >
                                            {/* delete Icon */}
                                              &#128465;
                                        </button>
                                    </div >

                                })
                            }
                        </div>
                    </React.Fragment>
                })}
                <span className={stl.inputDescription}>Стоимость работ</span>
                <input
                    type={'number'}
                    className={stl.taskCost}
                    value={taskItem.cost !== undefined ? taskItem.cost : '0'}
                    //setCost
                    onChange={e => props.handlers.setCost({ value: e.target.value, id: taskItem.id })}
                />
            </li>
    )
}