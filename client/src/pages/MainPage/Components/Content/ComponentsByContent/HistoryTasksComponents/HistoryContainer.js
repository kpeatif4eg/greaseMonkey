import React, { useEffect,useState} from 'react';
import { HistoryComponent } from './HistoryComponents/HistoryComponent';
import { connect } from 'react-redux';
import { getTasks, updateTask, getTaskById, settingHistoryDetails, } from '../../../../../../store/actions';


const HistoryContainer = props => {
    const [reqFlag, setReqFlag] = useState('')
    useEffect(()=>{
        reqFlag && props.getTasks(reqFlag);
    },[reqFlag, props.haveBeenChanged])



    //////

// useEffect(()=>{
//     const parseTasksByDate = (tasks) =>{
//         const task = tasks && tasks.reduce((ac, cv, i, cArr)=>{
//             const date = String(cv.date).slice(0,10);
//             const nextCv = cArr[i+1];
//             const nextDate = nextCv && String(cArr[i+1].date).slice(0,10);
//             if(!i){
//                 ac.collectDate = []
//                 ac.prevDate = date;
//                 ac.currDate = date;
//                 ac.payload = [];
                
//                 ac.collectDate.push({date: cv.date, tasks: cv})
//                 if(date !== nextDate){
//                     ac.payload.push(ac.collectDate)
//                 }
//                 return ac;
//             } else {
//                 ac.currDate = date;
//             }
//             if( date !== nextDate && ac.prevDate !== date ){
//                 // if(!ac.prevDate){
//                 //     return ac
//                 // }
    
    
//                 ac.collectDate = [];
//                 ac.collectDate.push({date: cv.date, tasks: cv});
//                 ac.payload.push(ac.collectDate);
//                 return ac
    
//             } else if( date !== nextDate){
//                     if(!nextDate){
//                         ac.collectDate.push({date: cv.date, tasks: cv});
//                         ac.payload.push(ac.collectDate);

//                         return ac;
//                     }
//                         ac.collectDate.push({date: cv.date, tasks: cv})
//                         ac.payload.push(ac.collectDate);
//                         return ac;
    
//                     } else if(( date === nextDate || !nextDate ) && ac.prevDate !== date){
//                                 ac.collectDate = [];
//                                 ac.collectDate.push({date: cv.date, tasks: cv});
//                                 ac.prevDate = date;
//                                 return ac;
    
//                             } else if( !nextDate && ac.prevDate === date  ){
//                                         ac.collectDate.push({date: cv.date, tasks: cv});
//                                         ac.payload.push(ac.collectDate);
//                                         return ac;
    
//                                     } else if( ac.prevDate === date  ){
//                                                 ac.collectDate.push({date: cv.date, tasks: cv});
//                                                 return ac;
    
//                                             }
//             ac.prevDate = date;
//             return ac;
//         },{})
//         console.log(task)

//         return task;
//     }
//     debugger
//     parseTasksByDate(props.doneTasks && props.doneTasks.payload)
// },[props.doneTasks])
    


    //////
    const getRequestType = type => {
        setReqFlag(type);
    }
    

    return <HistoryComponent {...props} getRequestType={getRequestType} />
}

const mapState = state => ({
    tasks:state.tasks.choosedTasks,
    doneTasks: state.history.doneTasks,
    haveBeenChanged: state.historyModal.updatedTask,
    isFetching: state.history.isFetchingHistoryPage
});

const mapDispatch = dispatch => ({
    getTasks: param => dispatch(getTasks(param)),
    updateTask: task => dispatch(updateTask(task)),
    getTaskById: id => dispatch(getTaskById(id)),
    settingHistoryDetails: details => dispatch(settingHistoryDetails(details))
});
export default connect(mapState,mapDispatch)(HistoryContainer);