import React from "react";
import { connect } from "react-redux";

import Inputs from "../Inputs";
import SignButton from "../SignButton";
import SignFooter from "../SignFooter";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "../../../../sass/components/_icon.scss";
import "../../../../sass/components/_form.scss";

import { signInAsyncRequestUser } from "../../../../actions/loggedUser";
import { SIGN_UP_PATH } from "../../../../constants/Pathes";

let SignIn = ({ onSignInClick, location }) => {
  console.log("signin location: ", location);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="sign-main">
        <Avatar className="sign-avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="sign-input-form" noValidate>
          <Inputs />
          <SignButton text="Sign In" onClick={onSignInClick} />
          <SignFooter
            rightText="Don't have an account? Sign Up"
            rightLinkPath={SIGN_UP_PATH}
          />
        </form>
      </div>
    </Container>
  );
};

export default connect(null, dispatch => ({
  onSignInClick: e => {
    e.preventDefault();
    dispatch(signInAsyncRequestUser());
  }
}))(SignIn);
