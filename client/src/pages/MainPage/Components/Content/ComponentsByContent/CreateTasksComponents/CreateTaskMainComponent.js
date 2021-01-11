import React from 'react';
import { Switch, Route, Link, useRouteMatch, } from 'react-router-dom';
import ChassisContainer from './AddTask/ChassisContainer';
import EngineContainer from './AddTask/EngineContainer';
import TransmissionContainer from './AddTask/TransmissionContainer';
import MaintainContainer from './AddTask/MaintainTasksComponent';
import AttachmentEquip from './AddTask/AttachmentEquipContainer';
import DiagnosticContainer from './AddTask/DiagnosticTaskComponent';
import CustomContainer from './AddTask/CustomTaskContainer';
import { TaskTypeMenu } from './TaskTypeMenu/TaskTypeMenu';
import SetCarContainer from './SetAutomobileComponent/SetCarContainer';
import DoneButton from './DoneButton/DoneButtonContainer';

import stl from './CreateTask.module.css';

export const CreateTaskMainComponent = props => {
    const match = useRouteMatch();
    const localPath = '/newtask'
    const taskTypes = [
        { title: 'Ручной ввод', special: true, path: '/customInput' },
        { title: 'Ходовая', path: '/chassis' },
        { title: 'Мотор', path: '/engine' },
        { title: 'ТО', path: '/technical-servicing' },
        { title: 'Трансмиссия', path: '/transmission' },
        { title: 'Доп. оборудование', path: '/addition-equip' },
        { title: 'Диагностика', path: '/diagnostic' },
    ];
    return (<>
        <div className={stl.topContainer}>
            {
                match.url === localPath && match.isExact
                    ?
                    null
                    :
                    <span className={stl.linkBack} >
                        <Link style={{ marginRight: 'auto' }} to={localPath}>
                            {/* &#8592; */}
                            <button className={`btn ${stl.btn}`}>Назад</button>
                        </Link>


                    </span>
            }
            {!(match.url === localPath && match.isExact) && <div className={stl.topSideTitle}>{props.topSideTitle}</div>}
            <DoneButton />
        </div>
        <div className={stl.container}>
            <Switch>
                <Route exact path={localPath}>

                    <SetCarContainer />
                    <TaskTypeMenu taskTypes={taskTypes} />

                </Route>

                <Route path={`${localPath}/chassis`}>

                    <ChassisContainer />

                </Route>
                <Route path={`${localPath}/engine`}>

                    <EngineContainer />

                </Route>
                <Route path={`${localPath}/transmission`}>

                    <TransmissionContainer />

                </Route>
                <Route path={`${localPath}/technical-servicing`}>

                    <MaintainContainer />

                </Route>
                <Route path={`${localPath}/addition-equip`}>

                    <AttachmentEquip />

                </Route>
                <Route path={`${localPath}/diagnostic`}>

                    <DiagnosticContainer />

                </Route>

                <Route path={`${localPath}/customInput`}>

                    <CustomContainer />

                </Route>
            </Switch>

        </div>
    </>
    )
}