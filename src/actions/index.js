import { SIGN_IN } from './types';
import Api from '../api';
import Cookies from 'universal-cookie';
import history from '../history';

const cookies = new Cookies();

export const signin = ({ email, password }) => {
  return async dispatch => {
    try {
      const response = await Api.post('/signin', { email, password });
      cookies.set('token', response.data.token, { path: '/' });
      dispatch({ type: SIGN_IN, payload: response.data.token });
      // history.push('/groups');
      console.log('sign in dispatched and cookie saved');
    } catch (err) {
      console.log('error during sign in');
    }
  };
};
