import { combineReducers } from 'redux';
// can rename anything, eg courses due to the export default from courseReducer
import courses from '../reducers/courseReducer';
import authors from '../reducers/authorReducer';

const rootReducer = combineReducers({
  // courses: courses ---can write short hand
  courses,
  authors,
});

export default rootReducer;
