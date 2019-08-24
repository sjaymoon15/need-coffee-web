import { AUTH_USER, AUTH_ERROR } from './types';
import Api from '../api';
import Cookies from 'universal-cookie';
import history from '../history';

const maxAgeInSeconds = '604800';
const cookies = new Cookies();

export const signin = formProps => async dispatch => {
  try {
    const response = await Api.post('/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    cookies.set('token', response.data.token, {
      path: '/',
      maxAge: maxAgeInSeconds
    });
    history.push('/');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signup = formProps => async dispatch => {
  try {
    const response = await Api.post('/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    cookies.set('token', response.data.token, {
      path: '/',
      maxAge: maxAgeInSeconds
    });
    history.push('/');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};
