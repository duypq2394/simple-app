import * as React from "react";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import * as PropTypes from "prop-types";
import Typography from "material-ui/Typography";
const Login = ({ onSubmit, onChange }) => (
  // <Card className="container">
  <div>
    <form action="/login" method="post" onSubmit={onSubmit}>
      <Card style={{ width: 500, marginLeft: "30%", textAlign: "center" }}>
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            margin: 30,
            fontSize: 30
          }}
        >
          Sign Up
        </Typography>

        <div className="field-line">
          <TextField
            label="Name"
            name="userid"
            type="email"
            onChange={onChange}
            style={{ width: 400, marginLeft: "3%" }}
          />
        </div>
        <div className="field-line">
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
            fullWidth
            autoComplete="current-password"
            style={{ width: 400, marginLeft: "3%" }}
          />
        </div>

        <div className="button-line">
          <Button
            type="submit"
            color="primary"
            variant="raised"
            style={{ margin: 10 }}
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </Card>
    </form>
  </div>
);

Login.prototype.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Login;
