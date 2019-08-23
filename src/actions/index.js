import { AUTH_USER, AUTH_ERROR } from './types';
import Api from '../api';
import Cookies from 'universal-cookie';
import history from '../history';

const cookies = new Cookies();

export const signin = ({ email, password }) => async dispatch => {
  try {
    const response = await Api.post('/signin', { email, password });
    dispatch({ type: AUTH_USER, payload: response.data.token });
    cookies.set('token', response.data.token, { path: '/' });
    history.push('/groups');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};
