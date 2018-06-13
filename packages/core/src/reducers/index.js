import { combineReducers } from 'redux';
import { animationReducer } from './animation';

export const appReducer = combineReducers({
  animation: animationReducer,
});
