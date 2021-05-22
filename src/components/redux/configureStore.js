import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware is safenet to warn if mutate the state, because the state in store in immutatable
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
