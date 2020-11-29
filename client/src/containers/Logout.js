import {httpRequest} from '../utils/API';
import {connect} from 'react-redux';

const LogoutContainer = props => {
    httpRequest.interceptors.response.use(null,err=>{
        console.log(err.response)
        return Promise.reject(err);
    
        // return err
    })
}

const mapState = () => ({
    
})

const mapDispatch = () => ({

})


export default connect()(LogoutContainer)