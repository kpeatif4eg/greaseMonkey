import React, { useEffect,useState } from 'react';
import {Redirect} from 'react-router-dom'
import { DoneButton } from './DoneButton';
import { connect } from 'react-redux';
import { setChoosedTasks, sendingChoosedTasks, getTasks ,showModal, hideModal, settingTaskList} from '../../../../../../../store/actions'


const DoneButtonContainer = props => {
    const { allTasks,choosedCar, setChoosed, sendChoosedTask, getTasks, delTask } = props;
        let sumCost = 0;
        let sumTaskCount = 0;
        let checkedOnce = true;

    const [isSent, setSent] = useState(false);

useEffect(()=>{
        const onlyCheckedTasks = [];

        const isEmptyObj = (obj) => {
            for (const key in obj) {
                return false
            }
            return true
        }

        const recurseRoundAllTasks = (obj) => {
            for (let key in obj) {
                if (Array.isArray(obj[key]) && !obj.notRecurse) {
                    obj[key].forEach((item,i) => {
                        sumCost+= !item.cost ?  0 : +item.cost ;
                        const x = item.sides && item.sides.reduce((accum, subItem) => {
                            if ( subItem.side.isChecked ) {
                                accum.title = item.title;
                                accum.names = accum.names || [];
                                accum.cost = item.cost;
                                accum.id = item.id;
                                accum.canBeHideTitle = item.canBeHideTitle ? item.canBeHideTitle : false;
                                accum.names.push( {side: subItem.side.name, id: subItem.id} );
                                sumTaskCount += subItem.side.subSides ?  0 : 1;
                                if (subItem.side.subSides) {
                                    accum.names[accum.names.length-1].subWork = 
                                        subItem.side.subSides
                                        .filter(subSubItem =>{
                                             return subSubItem.isChecked})
                                        .map(nameItem => {
                                                sumTaskCount += 1;
                                              return {name: nameItem.name, id:nameItem.id}
                                            });
                                }
                            }
                            return accum
                        }, {})
                        isEmptyObj(x) || onlyCheckedTasks.push(x)
                    })
                }
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    recurseRoundAllTasks(obj[key])
                }
            }
        checkedOnce = true;

        }
        recurseRoundAllTasks(allTasks);

        const checkedTasksObj = {
            tasks: onlyCheckedTasks,
            totalCost: sumCost,
            totalTaskCount: sumTaskCount,
        }
        setChoosed(checkedTasksObj)

    }, [allTasks.chassis, allTasks.engine, allTasks.electrical, allTasks.transmission])

    const saveTasksToServer = () => {
        //отправляем выбранные работы на сервер
        if(props.choosedTasks.tasks.length){
            sendChoosedTask({...props.choosedTasks, ...props.choosedCar});
            //переинициализируем список работ для выбора что-бы сбросить изменения
            props.reinitTaskList();
            setSent(true);
        } else {
            props.showModal()
        }
        const prepparedObj = {
            car: props.choosedCar,
            tasks: props.choosedTasks,
            // sum
        }

    }

    return (<>
        <DoneButton isShowModal={props.isShowModal}
                    hideModal={props.hideModal}
                    messageForModal={props.messageForModal}
                    descriptionforModal={props.descriptionForModal}
                    saveTasksToServer={saveTasksToServer}
                    getTasks={getTasks}
                    delTask={delTask}/>
                    {isSent && <Redirect to='/history/day' />}
                    </>
    )
}
const mapState = store => ({
    allTasks: store.tasks,
    isShowModal: store.global.isShowModalGlob,
    messageForModal: store.global.message,
    descriptionForModal: store.global.description,
    choosedTasks: store.tasks.choosedTasks,
    choosedCar: {mark: store.marks.checkedMark, model: store.marks.checkedModel}

})

const mapDispatch = dispatch => ({
    setChoosed: payload => dispatch(setChoosedTasks(payload)),
    sendChoosedTask: payload => dispatch(sendingChoosedTasks(payload)),
    getTasks: () => dispatch(getTasks()),
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal()),
    reinitTaskList: () => dispatch(settingTaskList())
})

export default connect(mapState, mapDispatch)(DoneButtonContainer)