import { useState } from "react";

import {useForm} from 'react-hook-form';
import useActions from '../../../hooks/useAction';
import {HOME, REVIEWS_HOME, REVIEWS_LOGIN, TICKETS_HOME, TICKETS_LOGIN} from '../../../constants/routes';
import {
  loginUser,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../../../actions/loginActions';
import { NavLink, useHistory } from "react-router-dom";

function LoginForm(props) {
    
    const {handleSubmit, register, errors} = useForm();
    const [submitAction] = useActions([loginUser]);
    const history = useHistory();

    const loginPath = props.service==='tickets' ? TICKETS_LOGIN : props.service ==='reviews' ? REVIEWS_LOGIN : null;
    const servicePath = props.service==='tickets' ? TICKETS_HOME : props.service ==='reviews' ? REVIEWS_HOME : null;

    
    const submit = (data) => {
        console.log(data.login);
        if (data.login !== '' && data.password !== '') {
          submitAction(data.login, data.password, props.service).then(e => {
            if (e.type && e.type === LOGIN_FAIL) {
              console.log("fail");
            } else if (e.type && e.type === LOGIN_SUCCESS) {
              history.push(servicePath);
              console.log("success");
              console.log(e);
            }
          });
        }
      };

    return (
        <form onSubmit={handleSubmit(submit)}> 
        <p>
            <label>
                Login:
                <input                  
                    {...register("login",{
                        required: 'required',
                        pattern: {
                        value: /^[A-Z0-9._%+-]+$/i,
                        message: 'invalid login'
                        }
                    })}
                    name="login"
                />
            </label>
            </p>
            <p>
            <label>
                Password:
                <input
                    {...register("password",{
                    required: 'required',
                    pattern: {
                        value: /^[A-Z0-9._]{3,15}$/i,
                        message: 'invalid password'
                    }
                    })}
                    type="password"
                    name="password"
                    id="password"
                />
            </label>
            </p>
            
            <button>Submit</button>
            <p>
            <NavLink to={`${loginPath}?tab=reg`}>
                Need an account?
            </NavLink>
            </p>
        </form>
    )
}
export default LoginForm;