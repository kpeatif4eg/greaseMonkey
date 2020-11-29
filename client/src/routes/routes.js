import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthContainer';
import HeaderContainer from '../pages/MainPage/Components/Header/HeaderContainer';
import ContentContainer from '../pages/MainPage/Components/Content/ContentContainer';
import CreateTaskContainer  from '../pages/MainPage/Components/Content/ComponentsByContent/CreateTasksComponents/CreateTaskContainer'
import HistoryContainer from '../pages/MainPage/Components/Content/ComponentsByContent/HistoryTasksComponents/HistoryContainer'
// import { Footer } from '../pages/MainPage/Components/Footer/Footer';
import  ModalContainer  from '../pages/MainPage/Components/Modal/ModalContainer'
import  MainPageContainer from '../pages/MainPage/Components/Content/ComponentsByContent/MainPageTasksComponents/MainPageContainer';


export const Router = (props) => {
    if (!props.token || !props.hideAuth) {
        return (
            <Switch>
                <Route path='/' >
                    <AuthPage />
                </Route>
            </Switch>
        )
    }
    return (
        <>
            <HeaderContainer />
            <ContentContainer>
                <Route exact path='/'> 
                    <Redirect to='/main' />
                </Route>
                <Switch>
                    <Route exact path='/main'>
                        <MainPageContainer />
                    </Route>

                    <Route path='/newtask'>
                        <CreateTaskContainer />
                    </Route>
                    <Route path='/history'>
                        <HistoryContainer />
                    </Route>
                </Switch>
                {
                    (props.isShowModal || props.isShowInfoModal)
                    && <ModalContainer 
                        {...props.message}
                        message={props.logoutMessage ||props.infoMessage}
                        okButton={!props.infoMessage && props.okHandler}
                    />
                }
            </ContentContainer >
            {/* <Footer /> */}


        </>
    )

}