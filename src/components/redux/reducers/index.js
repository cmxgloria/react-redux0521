import { combineReducers } from 'redux';
// can rename anything, eg courses due to the export default from courseReducer
import courses from './courseReducer';

const rootReducer = combineReducers({
  // courses: courses ---can write short hand
  courses,
});

export default rootReducer;
