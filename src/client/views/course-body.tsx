import * as React from "react";
import { withStyles, WithStyles } from "material-ui/styles";
import styles from "./components/duy/Styles";
import CourseList from "./course-list";
import CourseAdd from "./course-add";
// import { isLoggedIn } from "../c-sample"
interface IProps extends React.Props<{}> {}
export interface IState {}

const stylesTypes = {
  root: 1,
  container: 1,
  content:1,
  toolbar:1
};
type ClassNames = keyof typeof stylesTypes;
class Courses extends React.Component<IProps & WithStyles<ClassNames>, {}> {
  public render() {
    const { classes } = this.props;
    // console.log(isLoggedIn);
    return (
      <div>
        <CourseAdd/>
          <CourseList />
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(Courses);
