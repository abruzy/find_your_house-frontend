import axios from 'axios';
import { addSignupError, addLoginError } from '.';

const urlSignup = 'http://localhost:3001/signup';
const urlLogin = 'http://localhost:3001/auth/login';

export const signupUser = (user, history) => dispatch => {
  axios.post(
    urlSignup,
    user,
    { withCredentials: true },
  ).then(res => {
    dispatch({
      type: 'SIGNUP_SUCCESS',
      payload: {
        token: res.data.auth_token,
      },
    });
    history.push('/');
  }).catch(() => {
    dispatch(addSignupError('Sign up successfully failed, please try again'));
  });
};

export const loginUser = (user, history) => dispatch => {
  axios.post(
    urlLogin,
    user,
    { withCredentials: true },
  ).then(res => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: res.data.auth_token,
      },
    });
    history.push('/');
  }).catch(() => {
    dispatch(addLoginError('* Email or password incorrect'));
  });
};
