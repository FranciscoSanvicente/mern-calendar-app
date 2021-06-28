import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Loading from '../components/Loading/Loading'

export const Routers = () => {

  const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<Loading />);
    }

  return (

    <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ CalendarScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>

  );
};
