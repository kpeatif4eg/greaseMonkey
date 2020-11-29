import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import { useLocation} from 'react-router-dom';
import {logout} from '../../../../store/actions'


const HeaderContainer = props => {
    const location = useLocation();
    const isIncludePathHandler = (path, search) => {
        return path.includes(search)
        
    }

    return location && <Header logout={props.logout} location = {location} includePathHandler = {isIncludePathHandler}/>

}

const mapDispatch = dispatch =>({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatch)(HeaderContainer)