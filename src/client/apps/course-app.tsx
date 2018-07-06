import * as React from "react";
import { loadCourse } from "../actions/course-actions";
import CourseBody from "../views/course-body";
import styles from "../views/components/duy/Styles";
import { withStyles, WithStyles } from "material-ui/styles";
import CourseHeader from "../views/components/duy/course-header";
import CourseAuthor from "../views/components/duy/course-author";
import { renderRoutes } from 'react-router-config';
import Login from "../views/components/duy/login";
import { NotFound } from '../views/components/notfound';
interface IProps  {
  // routes: any;
}

interface IState {
  hasError: boolean;
}

export const routes = [
  {
    path: '/',
    component: CourseBody,
    exact: true
  }
];


const stylesTypes = {
  root: 1,
  content:1,
};
type ClassNames = keyof typeof stylesTypes;

class CourseApp extends React.Component<IProps & WithStyles<ClassNames>, IState> {
  public render() {
    const { classes } = this.props;
    return (
      <div className = {classes.root}>
        <CourseHeader />
        <main className={classes.content}>
        <CourseAuthor/>
        {renderRoutes(routes)}
        </main>
      </div>
    
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(CourseApp);