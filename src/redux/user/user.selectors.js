import { createSelector } from 'reselect';

// creating a selector to 'select' just the user object in the overall state object
// to prevent unnecessary re-rendering
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);