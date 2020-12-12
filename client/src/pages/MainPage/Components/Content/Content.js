import React, {useEffect} from 'react';

export const ContentPage = props => {
    useEffect(()=>{
        // инициируем список работ перед полной загрузкой приложения
        props.setTaskList()
    },[])
    return(
        <>
        {console.log(props)}
        {props.children}
        
        </>
    )
}