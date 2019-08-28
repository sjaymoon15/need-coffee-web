import { SEARCH_USER } from '../actions/types';

const INITIAL_STATE = {
  foundUsers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return { ...state, foundUsers: action.payload };
    default:
      return state;
  }
};
