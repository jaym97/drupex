// Package import
import { combineReducers } from "redux";

// Importing all reducers
import userReducer from './user/user.reducer';

// and combining them
export default combineReducers({
    user: userReducer,
})