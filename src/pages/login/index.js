import {LoginWrapper} from './styles';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import {PropTypes} from 'prop-types';

function AuthenticationPage(props) {
    const params = new URLSearchParams(props.location.search).get('tab');

    
    const service = window.location.href.includes('reviews') ? 'reviews' : window.location.href.includes('tickets') ? 'tickets' : null;
    
    const loginForm = params !== 'reg' ? <LoginForm service={service}/> : <RegistrationForm service={service}/>;
    return (
        <LoginWrapper>
            <h2>{service}</h2>
            {loginForm}
        </LoginWrapper>
    );
}

export default AuthenticationPage;