import React from "react";

import SignButton from "../SignButton";
import SignFooter from "../SignFooter";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "../../../../sass/components/_icon.scss";
import "../../../../sass/components/_form.scss";
import { SIGN_IN_PATH } from "../../../../constants/Pathes";
import Inputs from "../Inputs";
import { connect } from "react-redux";
import { signUpAsyncRequestUser } from "../../../../actions/loggedUser";

let SignUp = ({ onSignUpClick }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="sign-main">
        <Avatar className="sign-avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="sign-input-form" noValidate>
          <Inputs variant="outlined" signup />
          <SignButton text="Sign Up" onClick={onSignUpClick} />
          <SignFooter
            rightText="Already have an account? Sign in"
            rightLinkPath={SIGN_IN_PATH}
          />
        </form>
      </div>
    </Container>
  );
};

export default connect(null, dispatch => ({
  onSignUpClick: e => {
    e.preventDefault();
    dispatch(signUpAsyncRequestUser());
  }
}))(SignUp);
