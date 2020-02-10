import React from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

import "../../../../sass/components/_button.scss";

const SignButton = ({ text, onClick, fullWidth }) => (
  <>
    <Button
      type="submit"
      fullWidth={fullWidth}
      variant="contained"
      className="submit-button"
      onClick={onClick}
    >
      {text}
    </Button>
  </>
);

SignButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool
};

SignButton.defaultProps = {
  fullWidth: true
};

export default SignButton;
