import * as React from "react";
import { connect } from "react-redux";
import Course from "../models/course";
import * as CourseActions from "../actions/course-actions";
import AddForm from "./components/duy/add-course";
import { IStore } from "../stores/course-store";

interface IProps {
  courses: Course[];
}
interface IDispProps {
  addCourse: (name: string, url: string, fee: string, imgUrl:string) => void;
}

class CourseAddView extends React.Component<IProps & IDispProps, any> {
  render() {
    let { addCourse } = this.props;
    return (
      <div>
        <AddForm addCourse={addCourse} />
      </div>
    );
  }
}

const mapStateToProps = (store: IStore) => {
  return {
    courses: store.courseState.courses
  };
};

const mapDispatchToProps = (dispatch): IDispProps => {
  return {
    addCourse: (name: string, url: string, fee: string, imgUrl: string): void => dispatch(CourseActions.addCourses(name,url,fee,imgUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseAddView);
