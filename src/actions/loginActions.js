import Cookies from 'js-cookie';
import axios from 'axios';
import * as api from '../constants/api';

export const LOGIN_LOADING = 'login_loading';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';

export const LOGOUT_LOADING = 'LOGOUT_LOADING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const loginUser = (login, password, service) => async dispatch => {
    console.log(service)
     dispatch({
       type: LOGIN_LOADING,
     });
  
    try {
      const res = await axios.post(api.loginUser(service), {
        login,
        password
      });
  
      Cookies.set(service + 'Token', res.data.token, {expires: 4});
      return dispatch({
        type: LOGIN_SUCCESS
      });
    } catch (error) {
      return dispatch({
        type: LOGIN_FAIL,
        message: 'login failed'
      });
    }
  };

export const logoutUser = (service) => async dispatch => {
   dispatch({
     type: LOGOUT_LOADING
   });
  try {
    const res = await axios.post(
      api.logoutUser(),
      {},
      {
        headers: {Authorization: `token ${Cookies.get(service + 'Token')}`}
      }
    );
    if (res.status !== 204) {
      throw Error(res.data.message);
    }
    return dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (error) {
    return dispatch({
      type: LOGOUT_FAIL,
      error
    });
  }
};
  
export const registerUser = (login, password, firstname, surname, service) => async dispatch => {
   dispatch({
     type: REGISTER_LOADING
   });

  try {
    const res = await axios.post(api.registerUser(service), {
      login,
      password,
      firstname,
      surname
    });
    if (res.status !== 200) {
      throw Error(res.data.message);
    }
    return dispatch({
      type: REGISTER_SUCCESS
    });
  } catch (error) {
    return dispatch({
      type: REGISTER_FAIL,
      error
    });
  }
};