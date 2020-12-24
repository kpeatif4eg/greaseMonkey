import React,{useState} from 'react';
import { AuthPage } from './AuthPage'
import {connect} from 'react-redux';
import {login, registration, sendEmail} from '../../store/actions';


const AuthContainer = props => {
    const [form, setForm] = useState({ email: '', password: '', paymentRange:'пн-сб'});

    const formHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const loginHandler = (prop) => {
        props.loginStore(form)
    }

    const registrationHandler = (prop) => {
        props.registration(form)
    }

    return (
        <AuthPage {...props}
            formHandler={formHandler}
            loginHandler={loginHandler}
            registrationHandler={registrationHandler}
            sendPassToMail={props.sendPassToMail}
            isFetching={props.isFetching}
        />
    )
}
const mapState = state => ({
    isFetching: state.auth.isFetching,
    message: state.auth.message,
})
const mapDispatch = dispatch =>(
    {
        loginStore: payload => dispatch( login(payload) ),
        registration: payload => dispatch( registration(payload) ),
        sendPassToMail: (payload) => dispatch(sendEmail(payload))

    }
)

export default connect(mapState, mapDispatch)(AuthContainer)