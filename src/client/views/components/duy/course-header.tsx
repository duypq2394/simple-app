import * as React from "react";
import { withStyles, WithStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import styles from "./Styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

interface IProps extends React.Props<{}> {}

export interface IState {}

const stylesTypes = {
  root: 1,
  title: 1,
  logout: 1,
  appBar: 1,
  imgHeader: 1,
  drawerPaper: 1,
  content: 1,
  toolbar: 1,
  container: 1,
  card: 1,
  media: 1,
  CardContent: 1,
  paperStyle: 1,
  details: 1,
  cover: 1,
  avatar: 1,
  text: 1,
  button: 1
};
type ClassNames = keyof typeof stylesTypes;
class CourseHeader extends React.Component<
  IProps & WithStyles<ClassNames>,
  {}
> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" className={classes.title}>
              Wellcome 
            </Typography>
          </Toolbar>
        </AppBar>
       
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(CourseHeader);
