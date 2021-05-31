import { combineReducers } from 'redux';
// can rename anything, eg courses due to the export default from courseReducer
import courses from '../reducers/courseReducer';
import authors from '../reducers/authorReducer';
import apiCallsInProgress from './apiStatusReducer';

// remember: when create a new reducer, need to referene it here in the root reducer
const rootReducer = combineReducers({
  // courses: courses ---can write short hand
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
