import {
  FETCH_GROUPS,
  ADD_MEMBER,
  REMOVE_MEMBER,
  ADD_MEMBER_ERROR,
  FILTER_MEMBER
} from '../actions/types';

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
        potentialMembers: [...state.potentialMembers, action.payload.data]
      };
    case ADD_MEMBER_ERROR:
      return {
        ...state,
        potentialMembers: [...state.potentialMembers, action.payload.data]
      };
    case REMOVE_MEMBER:
      return {
        ...state,
        potentialMembers: state.potentialMembers.filter(
          member => member.email !== action.payload
        )
      };

    case FILTER_MEMBER:
      return {
        ...state,
        potentialMembers: action.payload
      };
    default:
      return state;
  }
};
