import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginUser, LOGIN_SUCCESS, registerUser, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../actions/loginActions";
import useActions from "../../../hooks/useAction";
import HomePage from "../../home";

function RegistrationForm(props) {
    
    const {handleSubmit, register, errors, getValues} = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const [submitAction] = useActions([registerUser]);
    const isRegisterSuccess = useSelector(state => state.type) === REGISTER_SUCCESS;
    const isRegisterLoading = useSelector(state => state.type) === REGISTER_LOADING;

    const [loading, setLoading] = useState(false);
    
    // useEffect(() => {
    //     if (isRegisterSuccess) {
    //         dispatch(loginUser(getValues('login'), getValues('password'),props.service)).then(e => {
    //                 if (e.type && e.type === LOGIN_SUCCESS) {
    //                     history.push(HomePage);
    //                 }
    //         });
    //     }
    // }, [isRegisterSuccess]);

    const submit = data => {
        if (data.login !== '' && data.password !== '') {
            submitAction(data.login, data.password, data.firstname, data.surname, props.service);
            history.push();
        }

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                Firstname:
                <input                  
                    {...register("firstname",{
                        required: 'required',
                    })}
                    name="firstname"
                />
            </label>

            <label>
                Surname:
                <input                  
                    {...register("surname",{
                        required: 'required',
                    })}
                    name="surname"
                />
            </label>
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
            <button>Submit</button>
            {loading && <p>loading</p>}
        </form>
    )
}
export default RegistrationForm;
