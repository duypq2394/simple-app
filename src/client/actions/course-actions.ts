import { createAction } from 'redux-actions';
import Course from '../models/course';
import CourseListService from '../services/course-list-service';

export const LOAD_COURSES = 'GET_COURSES';
export const ADD_COURSES = 'ADD_COURSES';
export const UPDATE_FETCH_STATUS = 'UPDATE_FETCH_STATUS';

export interface IPayloadAddCourse {
  name: string;
  url: string;
  fee: string;
  imgUrl: string;
  Course: Course;
}

export const addCourses = createAction<string, IPayloadAddCourse>(
  ADD_COURSES,
  (name: string, url: string, fee: string, imgUrl: string) => {
    return {
      name: name,
      url: url,
      fee: fee,
      imgUrl: imgUrl,
      course: new Course(name, url, fee, imgUrl)
    };
  }
);

export const loadCourse = createAction<string>(
  LOAD_COURSES,
  CourseListService.getCourses
);
export const updateFetchStatus = createAction<boolean>(UPDATE_FETCH_STATUS);
