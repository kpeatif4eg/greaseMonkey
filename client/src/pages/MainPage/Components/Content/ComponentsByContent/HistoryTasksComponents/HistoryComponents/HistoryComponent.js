import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch, Switch, Route,BrowserRouter, matchPath, useLocation } from 'react-router-dom'
import { History } from './HistoryByDay/History';
import { HistoryByWeek } from './HistoryByWeek/HistoryByWeek';
import {HistoryByMonth} from './HistoryByMonth/HistoryByMonth'
import HistoryModalContainer from '../HistoryModal/HistoryModalContainer';
import HistoryWeekDetailsModal from '../HistoryWeekInfoModal/HistoryWeekInfoModalContainer';
import { HistoryNavBar } from './HistoryNavBar';
import { Loader } from '../../../../Loader/Loader'



// import History from './'

export const HistoryComponent = props => {

    const [flag, setFlag] = useState('day');

    
    const match = useRouteMatch();

    return (

        <>
            <HistoryNavBar match={match.url} timeType={flag} /> 
            {
                !props.isFetching
                    ?
                    <Switch>
                        <Route path={match.url+'/:id'} children={<HistoryAllocater {...props} setTimeType={setFlag} /> } />
                        </Switch>


                    :
                    <Loader size={'m'} />
            }
            <HistoryModalContainer />
            <HistoryWeekDetailsModal />
        </>
    )
}

const HistoryAllocater = props => {
    const {id} = useParams();
    const match = useRouteMatch();
    useEffect(()=>{
        props.setTimeType(id)
    })

    return (
        <Switch>
            <Route path={`/history/day`}  exact>
                <History {...props} path={id} />
            </Route>

            <Route path={`/history/week`}  exact>
                <HistoryByWeek {...props} path={id} />
            </Route>
            <Route path={`/history/month`}  exact>
                <HistoryByMonth {...props} path={id} />
            </Route>
        </Switch>
    )
}