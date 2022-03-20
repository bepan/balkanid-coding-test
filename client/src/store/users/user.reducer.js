import { FETCH_USERS_SUCCESS } from './user.actions';

export const userInitialState = {
  users: []
};

export function userReducer(state, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {users: action.payload};

    default:
      return state;
  }
}