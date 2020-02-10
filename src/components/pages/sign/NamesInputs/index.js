import React from "react";
import PropTypes from "prop-types";

import { Grid, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import {
  setUserName,
  setFirstname,
  setLastname
} from "../../../../actions/signInputs";

let NamesInputs = ({
  variant,
  handleUserNameChange,
  handleFirstNameChange,
  handleLastNameChange
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          id="userName"
          name="userName"
          label="Username"
          autoComplete="uname"
          variant={variant}
          onChange={handleUserNameChange}
          required
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          autoComplete="fname"
          variant={variant}
          onChange={handleFirstNameChange}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          autoComplete="lname"
          variant={variant}
          onChange={handleLastNameChange}
          required
          fullWidth
        />
      </Grid>
    </>
  );
};

NamesInputs.propTypes = {
  variant: PropTypes.string
};

NamesInputs.defaultProps = {
  variant: "standard"
};

export default connect(null, dispatch => ({
  handleUserNameChange: e => {
    dispatch(setUserName(e.target.value));
  },
  handleFirstNameChange: e => {
    dispatch(setFirstname(e.target.value));
  },
  handleLastNameChange: e => {
    dispatch(setLastname(e.target.value));
  }
}))(NamesInputs);
