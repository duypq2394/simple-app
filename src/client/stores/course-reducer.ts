import * as Redux from 'redux';
import { handleActions, Action } from 'redux-actions';
import assign = require('object-assign');
import * as Actions from '../actions/course-actions';
import Course from '../models/course';

export type IState = {
  message?: string,
  courses?: Course[],
  isFetching?: boolean
};

export const initialState: IState = {
  message: 'Please add items',
  courses: [],
  isFetching: false
};

const reducers: { [key: string]: (state, action: Action<any>) => IState } = {
  [Actions.ADD_COURSES]: (state: IState, action: Action<Actions.IPayloadAddCourse>) => ({
    message: action.payload.text,
    courses: state.courses.concat(action.payload.course)
  }),
  // [Actions.UPDATE_FETCH_STATUS]: (state: IState, action: Action<boolean>) => ({
  //   isFetching : action.payload
  // }),
  [Actions.LOAD_COURSES]: (state: IState, action) => {
    if ( action.error ) {
      return {
        message: action.payload.message,
        isFetching: false
      };
    }
    return {
      courses: action.payload,
      isFetching: false
    };
  },

};

export function reducer(state: IState = initialState, action: Action<any>): IState {
  if ( reducers[action.type] != null ) {
    return assign({}, state, reducers[action.type](state, action));
  }
  return state;
}
