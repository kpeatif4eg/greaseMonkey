import React,{useState} from 'react';
import { AuthPage } from './AuthPage'
import {connect} from 'react-redux';
import {login, registration} from '../../store/actions';

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
        registration: payload => dispatch( registration(payload) )
    }
)

export default connect(mapState, mapDispatch)(AuthContainer)