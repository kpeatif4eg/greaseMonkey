import React from 'react';
import {connect} from 'react-redux';
import {HistoryWeekDetailsModal} from './HistoryWeekInfoModal';
import {setHistoryDatails} from '../../../../../../../store/actions'


const WekInfoContainer = props => {
    return <HistoryWeekDetailsModal {...props} />
}

const mapState = state =>({
    info: state.weekInfo.info
})

const mapDispatch = dispatch =>({
    setHistDetail: det=> dispatch(setHistoryDatails(det)),
})

export default connect(mapState, mapDispatch)(WekInfoContainer);