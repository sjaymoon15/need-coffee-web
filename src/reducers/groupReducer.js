import { FETCH_GROUPS, ADD_MEMBER, REMOVE_MEMBER } from '../actions/types';

const INITIAL_STATE = {
  groups: [],
  potentialMembers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GROUPS:
      return { ...state, groups: action.payload };
    case ADD_MEMBER:
      return {
        ...state,
        potentialMembers: [...state.potentialMembers, action.payload]
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        potentialMembers: state.potentialMembers.filter(
          member => member !== action.payload
        )
      };
    default:
      return state;
  }
};
