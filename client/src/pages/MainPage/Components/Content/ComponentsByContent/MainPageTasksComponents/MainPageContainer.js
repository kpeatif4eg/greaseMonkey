import React, { useEffect } from 'react';
import {MainPage} from './MainPage';
import {connect} from 'react-redux';
import {gettingUserInfo} from '../../../../../../store/actions'

const MainPageContainer = props => {
    useEffect(()=>{
        props.getUserInfo()
    },[])
    return <MainPage {...props}/>
}

const mapDispatch = dispatch=>({
    getUserInfo: ()=>dispatch(gettingUserInfo())
})

const mapState = state =>({
    userInfo: state.user,
    userFetching: state.user.isFetching,
})

export default connect (mapState, mapDispatch )(MainPageContainer)