import { Component } from "react";
import { Redirect, Route } from "react-router";
import { LOGIN, REVIEWS_HOME, REVIEWS_LOGIN, TICKETS_HOME, TICKETS_LOGIN } from "../constants/routes";
import {PropTypes} from 'prop-types';

const PrivateRoute = ({component: Component, service: service, ...rest}) => {
    const loginPage = service === 'reviews' ? REVIEWS_LOGIN : service === 'tickets' ? TICKETS_LOGIN : null;
    const user = null;
    return (
        <Route 
            service={service}
            {...rest}
            render = {props => (user !== null ? <Component {...props} /> : <Redirect to={loginPage}/>)}
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
    service: PropTypes.any.isRequired
};
export default PrivateRoute;