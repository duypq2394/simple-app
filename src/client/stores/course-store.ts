import * as CourseReducer from './course-reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
let promiseMiddleware = require('redux-promise');

export const rootReducer = combineReducers({
  courseState : CourseReducer.reducer,
});

export type IStore = {
  courseState: CourseReducer.IState
};

export const InitialState: IStore = {
  courseState : CourseReducer.initialState
};

export const configureStore = (initialState: IStore = InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(promiseMiddleware));
};
