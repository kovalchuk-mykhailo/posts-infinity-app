import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LoginPassInputs from "../LoginPassInputs";
import { connect } from "react-redux";
import { clearSignInputs } from "../../../../actions/signInputs";
import NamesInputs from "../NamesInputs";
import { clearError } from "../../../../actions/loggedUser";

let Inputs = ({ signup, onClearInputs, onClearError, variant }) => {
  useEffect(
    () => () => {
      console.log("Inputs unmount");
      onClearInputs();
      onClearError();
    },
    [onClearInputs, onClearError]
  );

  return (
    <Grid container spacing={3}>
      {signup ? <NamesInputs variant={variant} /> : null}
      <LoginPassInputs variant={variant} autoFocus={!signup} />
    </Grid>
  );
};

Inputs.propTypes = {
  variant: PropTypes.string,
  signup: PropTypes.bool,
  onClearInputs: PropTypes.func
};

Inputs.defaultProps = {
  variant: "standard",
  signup: false
};

const mapDispatchToInputsProps = dispatch => ({
  onClearInputs: () => {
    dispatch(clearSignInputs());
  },
  onClearError: () => {
    dispatch(clearError());
  }
});

Inputs = connect(null, mapDispatchToInputsProps)(Inputs);

export default Inputs;
