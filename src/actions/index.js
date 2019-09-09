import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_GROUPS,
  ADD_MEMBER,
  REMOVE_MEMBER,
  CREATE_GROUP,
  ADD_MEMBER_ERROR,
  FILTER_MEMBER
} from './types';
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

export const addMember = email => async dispatch => {
  try {
    const user = await Api.get(`/users/${email}`);
    dispatch({
      type: ADD_MEMBER,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: ADD_MEMBER_ERROR,
      payload: {
        email,
        error: `Can't find the user email`
      }
    });
  }
};

export const removeMember = email => {
  return {
    type: REMOVE_MEMBER,
    payload: email
  };
};

export const fetchGroups = () => async dispatch => {
  const response = await Api.get('/groups');
  dispatch({ type: FETCH_GROUPS, payload: response.data });
};

export const createGroup = formProps => async dispatch => {
  try {
    const response = await Api.post('/groups', formProps);
    dispatch({ type: CREATE_GROUP, payload: response.data });
    history.push(`/groups/${response.data.name}`);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Error occurred while creating a group'
    });
  }
};

export const filterMembersForGroup = potentialMembers => {
  const filteredMembers = potentialMembers.filter(member => !member.error);
  return {
    type: FILTER_MEMBER,
    payload: filteredMembers
  };
};
