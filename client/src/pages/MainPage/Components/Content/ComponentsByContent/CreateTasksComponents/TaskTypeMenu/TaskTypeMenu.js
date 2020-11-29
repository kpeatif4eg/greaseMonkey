import React from 'react';
import  TaskTypeButton from '../TaskTypeButton/TaskTypeButtonContainer';
import stl from './TaskTypeMenu.module.css'

export const TaskTypeMenu = props => {
    const { taskTypes } = props;

    return <div className={stl.typeTaskList}>

            {
                taskTypes.map(item => {
                    return <TaskTypeButton key={item.path} title={item.title} path={item.path} />
                })
            }
    </div>
}