import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DefaultLayout from "../pages/_layouts/default";
import AuthLayout from "../pages/_layouts/auth";

import {
  isUserSigned,
  getLoggedUserFromStorage
} from "../../utils/authentication";
import { signInSuccessUser } from "../../actions/loggedUser";
import { SIGN_IN_PATH, POSTS_PATH } from "../../constants/Pathes";

let RouteWrapper = ({
  component: Component,
  userId,
  isPrivate,
  isNavBar,
  OnUserIsLogged,
  location,
  ...rest
}) => {
  useEffect(() => {
    //use Effect = componentDidMount()
    const loggedUser = getLoggedUserFromStorage();
    if (isUserSigned(loggedUser.id)) {
      OnUserIsLogged(loggedUser.id, loggedUser.userName);
    }
  }, [OnUserIsLogged]);

  console.log("location", location.pathname);
  const isSigned = isUserSigned(userId);

  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !isSigned) {
    console.log("Redirect to", SIGN_IN_PATH);
    return (
      <Redirect
        to={{
          pathname: SIGN_IN_PATH,
          state: {
            from: location.pathname
          }
        }}
      />
    );
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isNavBar && isSigned) {
    console.log("Redirect to ", POSTS_PATH);
    return <Redirect to={POSTS_PATH} />;
  }

  const Layout = isNavBar ? DefaultLayout : AuthLayout;

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  userId: PropTypes.number.isRequired,
  OnUserIsLogged: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
  isNavBar: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isNavBar: false
};

const mapStateToProps = state => ({
  userId: state.loggedUser.id
});

const mapDispatchToProps = dispatch => ({
  OnUserIsLogged: (id, userName) => dispatch(signInSuccessUser(id, userName))
});

RouteWrapper = connect(mapStateToProps, mapDispatchToProps)(RouteWrapper);

export default RouteWrapper;
