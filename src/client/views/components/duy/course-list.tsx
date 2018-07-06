import * as React from "react";
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import CardMedia from "material-ui/Card/CardMedia";
import CardActions from "material-ui/Card/CardActions";
import { withStyles, WithStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import styles from "./Styles";
import Course from '../../../models/course';

interface IProps extends React.Props<{}> {
  courses: Course[];
  message: string;
}

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
  text2: 1,
  button: 1
};
type ClassNames = keyof typeof stylesTypes;
class CourseList extends React.Component<IProps & WithStyles<ClassNames>, {}> {
  public render() {
    const { courses, classes } = this.props;
    return (
      <div >
        <form className={classes.container}>
        {courses.slice(0).reverse().map(course => {
          return (
              <Card key={course.id} className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={course.imgUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {course.name}
                  </Typography>
                  <Typography component="p">
                    Fee: {course.fee}$
                  </Typography>
                </CardContent>
                <CardActions className={classes.button}>
                  <Button size="small" color="primary" href={course.url}> 
                    Learn More
                  </Button>
                </CardActions>
              </Card>
        
          );
        })}
        </form>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(CourseList);
