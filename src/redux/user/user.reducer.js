import { UserActionTypes } from './user.types';

// setting initial state to null until the user has 
// signed in thereby dispatching the set_current_user action
const INITIAL_STATE = {
  currentUser: null
};

// passing in state with a default value until the set_current_user action changes it
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;