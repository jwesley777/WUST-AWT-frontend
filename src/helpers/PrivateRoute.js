import { Component, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { LOGIN, REVIEWS_HOME, REVIEWS_LOGIN, TICKETS_HOME, TICKETS_LOGIN } from "../constants/routes";
import {PropTypes} from 'prop-types';
import { useDispatch } from "react-redux";
import { reviews_add, reviews_del, tickets_add, tickets_del } from "../actions/userActions";
import axios from "axios";
import * as api from '../constants/api';
import Cookies from "js-cookie";

const PrivateRoute = ({component: Component, service: service, ...rest}) => {
    
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();
    
    const loginPage = service === 'reviews' ? REVIEWS_LOGIN : service === 'tickets' ? TICKETS_LOGIN : null;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(api.getUser(service), {
                    headers: {Authorization: `token ${Cookies.get(service + 'Token')}`}
                });
                const user = {...res.data, roleId: 2};
                setUser(user);
                if (service === 'reviews') {
                    dispatch(reviews_add(user));
                }
                if (service === 'tickets') {
                    dispatch(tickets_add(user));
                }
            } catch (error) {          
                setIsError(true);
                setUser();
                if (service === 'reviews') {
                    dispatch(reviews_del());
                }
                if (service === 'tickets') {
                    dispatch(tickets_del());
                }
                Cookies.remove(service + 'Token');
            }
        setIsLoading(false);
        }
        fetchUser();
    }, []);

    //if (isError) return <Redirect to="/" />;
    if (isLoading) return "loading";
    console.log(service);
    console.log(user);
    return (
        <Route 
        
            service={service}
            {...rest}
            render = {props =>  (user != null ? <Component {...props} /> : <Redirect to={loginPage}/>)}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
    service: PropTypes.any.isRequired
};
export default PrivateRoute;