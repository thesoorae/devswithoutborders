import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../util/thunk';

export const configureStore = (preloadedState) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk))
);
