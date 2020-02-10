import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  HOME_PATH,
  POSTS_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  ADD_POST_PATH
} from "../../constants/Pathes";

import "../../sass/components/_container.scss";
import "../../sass/components/_link.scss";
import LinkButton from "../LinkButton";
import { isUserSigned } from "../../utils/authentication";
import UserMenu from "./UserMenu";
import { connect } from "react-redux";
import { signOutSuccessUser } from "../../actions/loggedUser";

let NavBar = ({ userId, userName, onSignOutClick, children }) => {
  return (
    <div className="navBarContainer">
      <span className="navLinksContainer">
        <Link to={HOME_PATH} className="welcomeLink">
          {children}
        </Link>
        <Link to={POSTS_PATH} className="navLink">
          Posts
        </Link>
        <Link to={ADD_POST_PATH} className="navLink">
          Add post
        </Link>
      </span>
      <span className="btnContainer">
        {!isUserSigned(userId) ? (
          <>
            <LinkButton to={SIGN_IN_PATH}>Sign In</LinkButton>
            <LinkButton to={SIGN_UP_PATH}>Sign Up</LinkButton>
          </>
        ) : (
          <UserMenu userName={userName} onSignOutClick={onSignOutClick} />
        )}
      </span>
    </div>
  );
};

NavBar.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string
};

NavBar.defaultProps = {
  userId: "",
  userName: ""
};

const mapStateToNavBarProps = state => ({
  userId: state.loggedUser.id,
  userName: state.loggedUser.userName
});

const mapDispatchToNavBarProps = dispatch => ({
  onSignOutClick: () => {
    dispatch(signOutSuccessUser());
  }
});

NavBar = connect(mapStateToNavBarProps, mapDispatchToNavBarProps)(NavBar);

export default NavBar;
