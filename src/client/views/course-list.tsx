import * as React from "react";
import { connect } from "react-redux";

import Course from "../models/course";
import * as CourseActions from "../actions/course-actions";
import CourseList from "./components/duy/course-list";
import AddForm from "./components/duy/add-course";
import { IStore } from "../stores/course-store";

interface IProps {
  courses: Course[];
  message: string;
  isFetching: boolean;
}

interface IDispProps {
  loadCourses: (filter, isFetching) => void;
}

class CourseListView extends React.Component<IProps & IDispProps, any> {
  render() {
    let { courses, message } = this.props;
    return <CourseList courses={courses} message={message} />;
  }

  // It is called only client rendering
  componentDidMount() {
    let { loadCourses, isFetching } = this.props;
    loadCourses("", isFetching);
  }
}

const mapStateToProps = (store: IStore) => {
  return {
    courses: store.courseState.courses,
    message: store.courseState.message,
    isFetching: store.courseState.isFetching
  };
};

const mapDispatchToProps = (dispatch): IDispProps => {
  return {
    loadCourses: (isFetching): void => {
      if (!isFetching) {
        let protocol =
          "https:" == document.location.protocol ? "https://" : "http://";
        let url = protocol + location.host + "/api/course";
        // dispatch(CourseActions.updateFetchStatus(true));
        dispatch(CourseActions.loadCourse(url));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseListView);
