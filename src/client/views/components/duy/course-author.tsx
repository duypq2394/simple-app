import * as React from "react";
import { withStyles, WithStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import styles from "./Styles";
import Paper from "material-ui/Paper";
import List from "material-ui/List";
import {ListItemText, ListItem} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import { mailFolderListItems, otherMailFolderListItems } from "../tileData";
import Drawer from "material-ui/Drawer";
// import List from "material-ui/List";
import Divider from "material-ui/Divider";
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
  text2: 1,
  button: 1
};
type ClassNames = keyof typeof stylesTypes;
class CourseAuthor extends React.Component<IProps & WithStyles<ClassNames>,{}> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.imgHeader} >
        <div className={classes.toolbar} />
        <div>
          <Paper className={classes.imgHeader} elevation={1}>
            <List>
              <ListItem>
                <Avatar
                  src="https://cps-static.rovicorp.com/3/JPG_400/MI0003/822/MI0003822398.jpg?partner=allrovi.com"
                  className={classes.avatar}
                />
                <ListItemText>
                  <Typography variant="headline" component="h1">
                    Learn music with Wolfgang Amadeus Mozart
                  </Typography>
                  <Typography component="p">
                    Wolfgang Amadeus Mozart, baptised as Johannes Chrysostomus
                    Wolfgangus Theophilus Mozart, was a prolific and influential
                    composer of the classical era. Born in Salzburg, Mozart
                    showed prodigious ability from his earliest childhood
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            {/* <img src="http://1.bp.blogspot.com/-R7ZG3h2mJsI/TWY3Czgd_QI/AAAAAAAAAA0/CsfBVP6NeDI/s1600/songwriting+%25281%2529.jpg"/> */}
          </Paper>
        </div>

        <Typography variant="headline" component="h4" className={classes.text2}>
          Courses taught by Mozart on Udemy
        </Typography>

         {/* <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer> */}
        
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(CourseAuthor);
