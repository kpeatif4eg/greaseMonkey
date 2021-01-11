import React from 'react';
import  TaskTypeButton from '../TaskTypeButton/TaskTypeButtonContainer';
import stl from './TaskTypeMenu.module.css'

export const TaskTypeMenu = props => {
    const { taskTypes } = props;

    return <div className={stl.typeTaskList}>
        <div className={stl.titleContainer}>
            <span>Укажи выполненную работу</span>
        </div>
            {
                taskTypes.map(item => {
                    return <TaskTypeButton key={item.path} special={item.special} title={item.title} path={item.path} />
                })
            }
    </div>
}