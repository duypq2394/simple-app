import * as React from "react";
import { withStyles, WithStyles } from "material-ui/styles";
import styles from "./Styles";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Card from "material-ui/Card";
export interface IProps {
  addCourse: (name: string, url: string, fee: string, imgUrl: string) => void;
}

interface IState {
  showADDForm: boolean;
  name: string;
  url: string;
  fee: string;
  imgUrl: string;

}

const stylesTypes = {
  imgHeader: 1,
  textField: 1,
  button2: 1,
  button: 1,
  button3: 1,
  button4: 1,
  card2: 1,
  text3: 1
};
type ClassNames = keyof typeof stylesTypes;
class CourseAdd extends React.Component<
  IProps & WithStyles<ClassNames>,
  IState
> {
  state: IState = {
    showADDForm: false,
    name: "",
    url: "",
    fee: "",
    imgUrl: ""
  };

  handleChangeName(e) {
    this.state.name = e.target.value;
    this.setState(this.state);
  }
  handleChangeUrl(e) {
    this.state.url = e.target.value;
    this.setState(this.state);
  }
  handleChangeFee(e) {
    this.state.fee = e.target.value;
    this.setState(this.state);
  }
  handleChangeImgUrl(e) {
    this.state.imgUrl = e.target.value;
    this.setState(this.state);
  }

  private handleSubmit(e) {
    e.preventDefault();
    this.props.addCourse(
      this.state.name,
      this.state.url,
      this.state.fee,
      this.state.imgUrl
    );
    this.setState({
      showADDForm: !this.state.showADDForm,
      name: "",
      url: "",
      fee: "",
      imgUrl: ""
    });
  }
  private show(e) {
    this.setState({
      showADDForm: !this.state.showADDForm
    });
  }
  private close(e) {
    this.setState({
      showADDForm: false
    });
  }
  public render() {
    const { classes } = this.props;
    const { name, url, fee, imgUrl } = this.state;
    return (
      <div>
        <div className={classes.button3}>
          <Button className={classes.button2} onClick={this.close.bind(this)}  >ALL COURSES</Button>
          <Button className={classes.button2} onClick={this.show.bind(this)}>
            ADD MORE
          </Button>
        </div>
        {this.state.showADDForm ? (
          <div>
            <Card className={classes.card2}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                  <TextField
                    name="courseName"
                    // autoFocus={true}
                    label="Add Name"
                    type="text"
                    value={name}
                    margin="normal"
                    onChange={this.handleChangeName.bind(this)}
                    className={classes.text3}
                  />
                </div>
                <div>
                  <TextField
                    name="courseUrl"
                    label="Add Url"
                    type="text"
                    value={url}
                    margin="normal"
                    onChange={this.handleChangeUrl.bind(this)}
                    className={classes.text3}
                  />
                </div>
                <div>
                  <TextField
                    name="courseImgUrl"
                    label="Add Image Url"
                    type="text"
                    value={imgUrl}
                    margin="normal"
                    onChange={this.handleChangeImgUrl.bind(this)}
                    className={classes.text3}
                  />
                </div>
                <div>
                  <TextField
                    name="courseFee"
                    label="Fee"
                    type="text"
                    value={fee}
                    margin="normal"
                    onChange={this.handleChangeFee.bind(this)}
                    className={classes.text3}
                  />
                </div>
                <Button type="submit" className={classes.button4}>
                  ADD
                </Button>
                {/* <input type="submit" value="Add" /> */}
              </form>
            </Card>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles)<IProps>(CourseAdd);
