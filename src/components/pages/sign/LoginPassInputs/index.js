import React from "react";
import PropTypes from "prop-types";

import { Grid, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { setEmail, setPassword } from "../../../../actions/signInputs";

const LoginPassInputs = ({
  variant,
  autoFocus,
  handleEmailChange,
  handlePasswordChange
}) => (
  <>
    <Grid item xs={12}>
      <TextField
        id="email"
        name="email"
        label="Email Address"
        variant={variant}
        onChange={handleEmailChange}
        required
        fullWidth
        autoFocus={autoFocus}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        variant={variant}
        onChange={handlePasswordChange}
        autoComplete="current-password"
        required
        fullWidth
      />
    </Grid>
  </>
);

LoginPassInputs.propTypes = {
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func
};

LoginPassInputs.defaultProps = {
  variant: "standard",
  autoFocus: false
};

export default connect(null, dispatch => ({
  handleEmailChange: e => {
    dispatch(setEmail(e.target.value));
  },
  handlePasswordChange: e => {
    dispatch(setPassword(e.target.value));
  }
}))(LoginPassInputs);
