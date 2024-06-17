import { combineReducers } from 'redux';
import app from './app';
import users from './users';

const rootReducer = combineReducers({
  app: app,
  users: users,
});

export default rootReducer;