import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  group: groupReducer,
  user: userReducer
});
