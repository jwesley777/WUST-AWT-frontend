import {LoginWrapper} from './styles';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import {PropTypes} from 'prop-types';

function AuthenticationPage(props) {
    const params = new URLSearchParams(props.location.search).get('tab');

    
    const loginForm = params === 'reg' ? <LoginForm service={props.service}/> : <RegistrationForm service={props.service}/>;
    const service = window.location.href.includes('reviews') ? 'reviews' : window.location.href.includes('tickets') ? 'tickets' : null;
    return (
        <LoginWrapper>
            Service:{service}
            {loginForm}
        </LoginWrapper>
    );
}

export default AuthenticationPage;