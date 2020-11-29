import React from  'react';
import {AddTaskComponent} from './AddTasksComponent';
import {ErrorPage} from '../../../ErorrPage/ErrorPage';


const Global = props => {
    const {typeOfMainSystem} = props;
    const checkboxHandler = (values, e) => {
        props.changeHandlerStore({name: values.name,
                                    id: values.id,
                                    isChecked: e,
                                    typeOfSystem: values.typeOfSystem,
                                    mainSystem: typeOfMainSystem,
                                    sideId: values.sideId,
                                    isSubSides: values.isSubSides && values.isSubSides,
            });

    }

    const radioHandler = (values, e) => {
        props.changeHandlerStore({name: values.name,
            id: values.id,
            isChecked: e,
            typeOfSystem: values.typeOfSystem,
            mainSystem: typeOfMainSystem,
            sideId: values.sideId,
            isSubSides: values.isSubSides && values.isSubSides,
            radio: values.radio,
            clear: values.clear
});
    }

    const costHandler = (values, cost) => {
        props.changeHandlerStore({
                                    name: values.name,
                                    id: values.id,
                                    typeOfSystem: values.typeOfSystem,
                                    cost,
                                    mainSystem: typeOfMainSystem,
        })
    }
    if(props.error){
        return (<ErrorPage error={props.error} />)
    }
    return (
        <AddTaskComponent {...props.area} 
                          mainTypeSystem={typeOfMainSystem}
                          checkboxHandler={checkboxHandler}
                          radioHandler={radioHandler}
                          costHandler={costHandler}
        />
    )
};


export default(Global)