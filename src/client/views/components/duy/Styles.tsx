import { Theme } from 'material-ui/styles';
// import { initialState } from '../../../stores/profile-reducer';

const drawerWidth = 240;
const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: 1600,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: 'row wrap',
  },
  title: {
    flex: 1,
    color: "#ffffff"
  },
  text: {
    color: "#ffffff"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 60,
    backgroundColor: "#343a40"
  },
  imgHeader: {
    position: "relative",
    zIndex: 0,
    maxHeight: 500,
    padding:0,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },

  content: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    padding: theme.spacing.unit * 3,
    minWidth: 0 ,// So the Typography noWrap works
    
   
  },
  toolbar: theme.mixins.toolbar,
  container: {
    paddingLeft:"3%",
    textAlign: "center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  card2:{
    width: 450,
    marginLeft: '32%',
  },
  card: {
    width: 350,
    height: 350,
    margin: 10,
    padding: 0,
    display: "inline-table",
    float: "left",
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  CardContent: {
    maxWidth: "20%",
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // display: initialState
  },
  paperStyle: {
    height: "85%",
    width: "85%",
    margin: "10%",
    textAlign: "center",
    display: "inline-block"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    width: 151,
    height: 151
  },
  avatar: {
    width: 100,
    height: 100
  },
  text2: {
    textAlign: "center",
    marginTop: 40,
    marginDown: 30
  },
  text3:{
    width:300,
    marginLeft: '15%',
  },
  button:{
    marginLeft: '30%',
  },
  button2:{
    margin: theme.spacing.unit,
    border: "1px solid rgba(0, 0, 0, 0.23)",
  },
  button3:{
    marginLeft: '40%',
  },
  button4:{
    marginLeft: '40%',
    margin: theme.spacing.unit,
    border: "1px solid rgba(0, 0, 0, 0.23)",
  }
});

export default styles;