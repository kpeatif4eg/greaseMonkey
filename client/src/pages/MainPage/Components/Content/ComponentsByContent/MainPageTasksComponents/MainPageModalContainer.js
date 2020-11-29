import React, {useEffect, useState} from 'react'
import {MainPageModal} from './MainPageModal';
import {connect} from 'react-redux';
import {changeUserInfo, changingUserInfo} from '../../../../../../store/actions'

const MainPageModalContainer = props => {

    const [pass, setPass] = useState({pass1:'', pass2:''});
    const passesHandler = Epass =>{
        setPass({...pass, [Epass.name]:Epass.value});
    }



    return (
        <MainPageModal {...props} compPass={passesHandler} pass={pass}/>
    )
    
}

const mapState = state =>({
    user: state.user,
});

const mapDispatch = dispatch =>({
    changeUserInfo: info => dispatch(changeUserInfo(info)),
    saveNewInfo: info => dispatch(changingUserInfo(info))
})

export default connect(mapState, mapDispatch)(MainPageModalContainer)

