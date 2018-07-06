import * as fetch from 'isomorphic-fetch';

export default class CourseListService {

  public static getCourses(url) {
    return new Promise((resolve, reject) => {
      console.log(url);
      fetch(url)
      .then(apiResult => apiResult.json())
      .then(json => resolve(json))    // Success
      .catch(error => reject(error)); // Fail
    });
  }
}
