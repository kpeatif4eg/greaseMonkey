import React, { useEffect } from 'react';
import { SetCar } from './SetCar';
import { settingAutomobileList, settingMark, setModel, setMark } from '../../../../../../../store/actions'
import { connect } from 'react-redux';


const SetCarContainer = props => {

    const { autoList,
        modelList,
        getModel,
        getAutos,
        setMark,
        setModel,
        isFetching,
        checkedMark,
        checkedModel
    } = props;

    useEffect(() => {
        //если список авто уже получен запрос не отправляем
       !props.autoList && getAutos();
    }, [])

    const checkMark = mark => {
        const isExist = autoList && autoList.some(item => {
            return item === mark
        })
        return isExist && mark
    }



    const getmModel = mark => {
        if (checkMark(mark)) {
            getModel(mark)
        }
    }

    return (
        <SetCar cars={autoList}
            getModel={getmModel}
            models={modelList}
            isFetching={isFetching}
            setMark={setMark}
            setModel={setModel}
            checkedMark={checkedMark}
            checkedModel={checkedModel}

        />
    )
}

const mapState = store => ({
    autoList: store.marks.automobiles,
    modelList: store.marks.currentMark,
    isFetching: store.marks.isFetching,
    checkedMark: store.marks.checkedMark,
    checkedModel: store.marks.checkedModel,
})

const mapDispatch = dispatch => ({
    getAutos: () => dispatch(settingAutomobileList()),
    getModel: model => dispatch(settingMark(model)),
    setModel: model => dispatch(setModel(model)),
    setMark: mark => dispatch(setMark(mark)),

})

export default connect(mapState, mapDispatch)(SetCarContainer)