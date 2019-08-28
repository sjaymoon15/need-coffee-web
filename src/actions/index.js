import { AUTH_USER, AUTH_ERROR, FETCH_GROUPS, SEARCH_USER } from './types';
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

export const signout = () => {
  cookies.remove('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const searchUser = email => async dispatch => {
  console.log(email);
  const response = await Api.post('/user', { email });
  dispatch({ type: SEARCH_USER, payload: response.data });
};

export const fetchGroups = () => async dispatch => {
  const response = await Api.get('/groups');
  dispatch({ type: FETCH_GROUPS, payload: response.data });
};

export const createGroup = formProps => async dispatch => {};
